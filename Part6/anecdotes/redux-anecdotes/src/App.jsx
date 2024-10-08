import { useSelector, useDispatch } from 'react-redux'
import {createVote} from './reducers/anecdoteReducer'
import { createAnecdote } from './reducers/anecdoteReducer'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'

const App = () => {

  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter></Filter>
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App