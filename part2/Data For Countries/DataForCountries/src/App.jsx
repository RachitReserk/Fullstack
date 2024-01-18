import { useState , useEffect } from 'react'
import axios from 'axios'

function App() 
{

const [data, setData] = useState('')
const [value , setValue] = useState('')
const [capital , setCapital] =useState([])
const [flag , setFlag] = useState('')

useEffect( () => 
{
axios
.get(`https://studies.cs.helsinki.fi/restcountries/api/name/${data}`)
.then(response => {
  console.log(response.data)
  setCapital(response.data.capital.map(val => val))
  setFlag(response.data.flags.png)
})
},[data])

const handleChange = (event) =>
{
  setValue(event.target.value)
  axios
  .get('https://studies.cs.helsinki.fi/restcountries/api/all')
  .then(response => 
  {
   const test = (response.data.map( val => 
    {
      if(val.name.common == event.target.value)
      {
        setData(val.name.common)
      }
    }
    ))
  }
  )
}

  return (
    <div className='content'>
      <h1>Find Countries: <input value={value} onChange={handleChange}></input></h1>
        <h3>{capital.map(val => val)}</h3>
        <h3><img src={flag}></img></h3>
      
    </div>
  )
}

export default App
