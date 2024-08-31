import { useState } from 'react'
import blogService from '../services/blogs'

const Blog = ({ blog , like , deletex , User }) => {

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }
  const invBlog = 
  {
    display: 'none',
  }

  const [details,setDetails] = useState(false)

  const del = () =>
  {
    deletex(blog.id)
  }

  const removeButton = () =>
  {
    if(User === blog.user)
    {
      return (
        <button onClick={del}>Delete</button>
      )
    }
  }

  if(details === true)
  {
    return (
      <div className="blogx" style={blogStyle}>
        {blog.title}
        <button onClick={() => setDetails(!details)}>hide</button>
        <br />
        {blog.author}
        <br />
        {blog.likes}<button  onClick={() => {
          const tempObject = {
            title:blog.title,
            author:blog.author,
            url:blog.url,
            likes:blog.likes+1,
            user:blog.user
          }
          like(tempObject,blog.id)
        }}>like</button>
        <br />
        {blog.url}
        <br />
        {removeButton()}
      </div>
    )
  }
  return (
    <div className="blogx" style={blogStyle} data-testid="title">
      {blog.title} <button onClick={() => setDetails(!details)}>view</button>
      <div className="blogx" style={invBlog} data-testid="author">
        {blog.author}
      </div>
    </div>
  )
}

export default Blog