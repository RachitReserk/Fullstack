const blogRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const { userExtractor } = require("../utils/middleware");

blogRouter.get('/',async(request,response) => 
{
    const blog = await Blog.find({})
    response.json(blog)
})



blogRouter.post('/',userExtractor,async(request,response) => 
{
    const body = request.body
   
    if (!body.title || !body.url) {
      return res.status(400).json({ error: "Title and url are required" });
    }

    const user = request.user;
  
    const newBlog = new Blog({
      title: user.title,
    author: user.author,
    url: user.url,
    likes: user.likes,
    user:user.id
    })
    
    const savedBlog = await newBlog.save()
    user.blogs=user.blogs.concat(savedBlog._id)
    await user.save()
    response.status(201).json(savedBlog)
})

blogRouter.delete('/:id',userExtractor,async(request,response) => 
{
  const blogToDelete = await Blog.findById(request.params.id);
  if (!blogToDelete) {
    return res.status(404).json({ error: "Blog not found" });
  }
  if (blogToDelete.user.toString() !== request.user._id.toString())
      return res.status(401).json({ error: "Unauthorized deletion" });
      const result = await Blog.deleteOne(blogToDelete);
      if (result.deletedCount === 1) {
        res.status(204).end();
      } else {
        res.status(400).json({ error: "Blog deletion failed" });
      }

})

blogRouter.put('/:id',userExtractor,async(request,response) => 
{
    const { title, author, url, likes } = request.body ;
    const user = req.user;
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      {
        title,
        author,
        url,
        likes,
        user: user,
      },
      {
        new: true,
        runValidators: true,
        context: "query",
        populate: "user",
      }
    );

    if (!updatedBlog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    res.json(updatedBlog);

})

module.exports = blogRouter