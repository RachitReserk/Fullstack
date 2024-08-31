import { useState, useEffect , useRef } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'
import Notification from './components/Notification'
import Togglable from './components/Togglable'
import BlogForm from './components/BlogForm'

const App = () =>
{
  const [blogs, setBlogs] = useState([])
  const [username,setUsername] = useState('')
  const [password,setPassword]=useState('')
  const [user,setUser]=useState(null)
  const [noti , setNoti] = useState(null)
  const blogFormRef = useRef()

  useEffect(() =>
  {
    const loggedUserJSON=window.localStorage.getItem('loggedBlogappUser')
    if(loggedUserJSON)
    {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  },[])

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )

  }, [])

  const handleLogin = async(event) =>
  {
    event.preventDefault()
    try
    {
      const user = await loginService.login({
        username,password,
      })
      setNoti('Logged In !')
      setTimeout(() => {
        setNoti(null)
      },5000)

      blogService.setToken(user.token)
      setUser(user)
      window.localStorage.setItem('loggedBlogappUser',JSON.stringify(user))
      setUsername('')
      setPassword('')
    }catch(exception)
    {
      console.log(exception)
    }
  }

  const handleLogOut = () =>
  {
    window.localStorage.clear()
    setUser(null)
  }

  const handleAddBlog = (blogObject) =>
  {
    blogService.create(blogObject)
      .then(returnedBlog =>
      {
        blogFormRef.current.toggleVisibility()
        setBlogs(blogs.concat(returnedBlog))
        setNoti('Blog Added')
        setTimeout(() => {
          setNoti(null)
        },5000)
      })
  }
  const handleLike = async(object,id) =>
  {
    const updateBlog = await blogService.update(object,id)
    setBlogs(blogs.map(blog => blog.id !== updateBlog.id ? blog : updateBlog))
  }
  const handleInvalidLike = () =>
  {
    setNoti('LogIn To Like')
    setTimeout(() => {
      setNoti(null)
    },5000)
  }

  const handleDelete = async(id) =>
  {
    const temp=id
    if(window.confirm('You sure wanna delete this blog ?'))
    {
      const removal = await blogService.remove(id)
      setBlogs(blogs.filter(blog => blog.id !== id))
    }
  }

  if (user === null)
  {
    return (
      <div>
        <Notification message={noti}></Notification>
        <Togglable buttonLabel='login'>
          <h2>Log in to BLOGS</h2>
          <form onSubmit={handleLogin}>
            <div>
          username
              <input type='text' value={username} name='Username' onChange={({ target }) => setUsername(target.value)}></input>
            </div>
            <div>
        password
              <input type='password' value={password} name="Password" onChange={({ target }) => setPassword(target.value)}></input>
            </div>
            <button type='submit'>login</button>
          </form>
        </Togglable>
        <br />
        {blogs.sort((a,b) => b.likes-a.likes).map(blog =>
          <Blog like={handleInvalidLike} key={blog.id} blog={blog}/>
        )}
      </div>
    )
  }

  return (
    <div>
      <Notification message={noti}></Notification>
      <button onClick={handleLogOut}>logout</button>
      <Togglable buttonLabel="new blog" ref={blogFormRef}>
        <BlogForm handleAddBlog={handleAddBlog}></BlogForm>
      </Togglable>
      <br />
      <h2>blogs</h2>
      <br />
      {blogs.sort((a,b) => b.likes-a.likes).map(blog =>
        <Blog User={user.id} deletex={handleDelete} like={handleLike}key={blog.id} blog={blog}/>
      )}
    </div>
  )
}

export default App