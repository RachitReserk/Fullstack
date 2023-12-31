import { useState } from 'react'
import './App.css'

function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes,setVote] = useState([0,0,0,0,0,0,0,0])
  const [mostvote,setMostVote] = useState(0)
  const [mostvotepos,setMostVotePos] = useState(0)

  const onSmash = () => 
  {
  const x = Math.floor((Math.random() * anecdotes.length))
  setSelected(x)
  }

  const onVote = () =>
  {
    const votesCopy = [...votes]
    votesCopy[selected] += 1
    setVote(votesCopy)
    let i=0
    let maxpos=mostvotepos
    let max=mostvote
    console.log('before max ='+max)
    for(i=0;i<votes.length;i++)
    {
       if(max<votesCopy[i])
       {
        max=votesCopy[i]
        maxpos=i
       }
    }
    console.log('after max ='+max)
    console.log('max position value'+maxpos)
    setMostVote(max)
    setMostVotePos(maxpos)
  }
  

  return (
    <div>

      <h1>Anecdote Of The Day</h1>
      {anecdotes[selected]}

      <div>has {votes[selected]} votes</div> 
      <div>
        <button onClick={onSmash}>next anecdote</button>
        <button onClick={onVote}>vote</button>

    </div>
    <div>
      <h1>Anecdote with most votes</h1>
      {anecdotes[mostvotepos]}
    </div>

    </div>
  )
}

export default App
