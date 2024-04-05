const dummy = (blogs) => 
{
    return 1
}

const totallikes = (blogs) =>
{
let count = 0 
blogs.map( (obj) => 
{
count = count + obj.likes    
})
return count
}

const FavBlog = (blogs) =>
{
let max = 0
let id = 0
let authorx = ''
let titlex = ''
let likesx = 0
blogs.map(obj => 
    {
        if(obj.likes > max)
        {
        max=obj.likes
        id=obj.id
        }
    })
blogs.map(obj => 
    {
    if(obj.id == id)
    {
    authorx = obj.author
    titlex = obj.title
    likesx = obj.likes
    }    
    })
    console.log(authorx)
    const favBlog = {
        title:titlex,
        author:authorx,
        likes:likesx
}

return favBlog
}

module.exports =
{
    dummy,
    totallikes,
    FavBlog
}