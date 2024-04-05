const {test , describe} = require('node:test')
const assert = require('node:assert')
const listhelper = require('../utils/list_helper')

test('dummy returns one',() => 
{
const blogs = []
const result = listhelper.dummy(blogs)
assert.strictEqual(result,1)
})

describe('total likes', () => 
{
const listWithOneBlog = 
[
{
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
    likes: 5,
    __v: 0   
}
]
test('One Blog', () => {
  const result = listhelper.totallikes(listWithOneBlog)
  assert.strictEqual(result,5)
})
})

describe('Most liked Blog' , () => 
{
    const listWithThreeBlog = 
    [
    {
        _id: '5a422aa71b54a676234d17f8',
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
        likes: 7,
        __v: 0   
    },
    {
        _id: '5a422aa71b54a676234d17f9',
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
        likes: 5,
        __v: 0   
    },
    {
        _id: '5a422aa71b54a676234d17f0',
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
        likes: 6,
        __v: 0   
    }
    ]
    test('Most beloved blog',() => 
    {
        const result = listhelper.FavBlog(listWithThreeBlog)
        assert.deepStrictEqual(result,
        {
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        likes: 6,
        })
    })
})

