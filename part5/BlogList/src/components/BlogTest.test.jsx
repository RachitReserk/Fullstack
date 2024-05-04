import {render , screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Blog from './Blog'
import Togglable from './Togglable'
import { expect } from 'vitest'

test('Render Title',() => 
{
    const blog = 
    {
    title: 'CHick farming',
    author:'Chick Master',
    URl:'LOCAL'    
    }
   render(<Blog blog={blog}></Blog>)
   const element = screen.getByTestId('title')
   expect(element).toBeDefined()
})
test('Render Author',() => 
{
    const blog = 
    {
    title: 'CHick farming',
    author:'Chick Master',
    URl:'LOCAL'    
    }
   render(<Blog blog={blog}></Blog>)
   const element = screen.getByTestId('author')
   expect(element).toBeDefined()
})

describe('<Togglable />', () => {
    let container
  
    beforeEach(() => {
      container = render(
        <Togglable buttonLabel="show...">
          <div className="testDiv" >
            togglable content
          </div>
        </Togglable>
      ).container
    })
  
    test('renders its children', async () => {
      await screen.findAllByText('togglable content')
    })
  
    test('after clicking the button, url and likes are visible', async () => {
      const user = userEvent.setup()
      const button = screen.getByText('show...')
      await user.click(button)
  
      const div = container.querySelector('.togglableContent')
      expect(div).not.toHaveStyle('display: none')
    })
  })

