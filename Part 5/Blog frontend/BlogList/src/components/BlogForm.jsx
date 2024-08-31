import { useState } from 'react'
const BlogForm = ({ handleAddBlog }) => {
  const [title , setTitle] = useState('')
  const [author , setAuthor] = useState('')
  const [url , setUrl] = useState('')

  const AddBlog = (event) =>
  {
    event.preventDefault()
    const blog =
    {
      title: title,
      author: author,
      url: url,
    }
    handleAddBlog(blog)
    setTitle('')
    setAuthor('')
    setUrl('')
  }


  return (
    <form onSubmit={AddBlog}>
      <br />
        Add A New Blog
      <br />
        Title:<input type='text' name ="title" value={title} onChange={({ target }) => setTitle(target.value)}></input>
      <br />
        Author:<input type='text' name="author" value={author} onChange={({ target }) => setAuthor(target.value)}></input>
      <br />
        Url:<input type='text' name="url" value={url} onChange={({ target }) => setUrl(target.value)}></input>
      <button type='submit'>Add</button>
    </form>
  )
}


export default BlogForm