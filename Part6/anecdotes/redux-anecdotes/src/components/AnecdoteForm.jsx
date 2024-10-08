import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";

const AnecdoteForm = () => 
{

const dispatch = useDispatch()

const addAnecdote = (anecdote) =>
    {
    event.preventDefault()
    dispatch(createAnecdote(event.target.anecdote.value))
    dispatch(createNotification(event.target.anecdote.value))
    event.target.anecdote.value=''
    }

return (
    <div>
    <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <input name="anecdote" /> 
        <button type="submit">add</button>
      </form>
    </div>
)
}

export default AnecdoteForm