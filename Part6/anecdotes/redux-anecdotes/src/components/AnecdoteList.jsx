import { useSelector, useDispatch } from 'react-redux'
import {createVote} from '../reducers/anecdoteReducer'

const AnecdoteList = () =>
    {
        const anecdotes = useSelector(state => state.anecdote)
        const filter = useSelector(state => state.filter)
        const dispatch = useDispatch()

        const vote = (id) => {
            event.preventDefault()
            dispatch(createVote(id))
           }


    if(filter.permission == 'Yes')
      {
      return (
        <div>
          {anecdotes.map(anecdote =>  
            <><div>{anecdote.content.includes(filter.keywords) ? 
            <div>
              {anecdote.content}
              <div>has {anecdote.votes}<button onClick={() => vote(anecdote.id)}>vote</button></div>
            </div> 
            : 
            ''}</div>
            </>
          )}
        </div>
      )
      }
    else
      {
        return (
          <div>
          {[...anecdotes].sort((a,b) => b.votes - a.votes).map(anecdote =>
              <div key={anecdote.id}>
                <div>
                  {anecdote.content}
                </div>
                <div>
                  has {anecdote.votes}
                  <button onClick={() => vote(anecdote.id)}>vote</button>
                </div>
              </div>
            )}
          </div>
      )
  }
      }       
    

export default AnecdoteList