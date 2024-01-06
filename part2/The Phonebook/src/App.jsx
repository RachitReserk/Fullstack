import { useState } from 'react'
import './App.css'

function App() {

  const [persons,setPersons] = useState([{ name: 'Rachit Tiwari', phno: 7905575833 ,id:0}])
  const [newName , setNewName] = useState('')
  const [newNumber , setNewNumber] = useState('')
  const [newFilter , setNewFilter] = useState('')
  const [showFilter , setShow] = useState(true)
  
  const NameToShow = showFilter ? persons : persons.filter((nameobj) => 
  {
    if(nameobj.name.toUpperCase() == newFilter.toUpperCase())
    return nameobj
  })
   
  const addName = (event) =>
  {
    event.preventDefault()
    const NameObject = {
      name : newName,
      phno : newNumber,
      id: persons.length+1,
    } 

    let flag='true';
    for(let i=0;i<persons.length;i++)
    {
      if(NameObject.name == persons[i].name)
      flag='false'
    }
    if(flag == 'true')
    {
    setPersons(persons.concat(NameObject))
    setNewName('')
    setNewNumber('')
    }
    else
    {
      alert(`${newName} is already added to phonebook`)
      setNewName('')
    }
  }
  
  const handleChange = (event) =>
  {
   setNewName(event.target.value)
  }

  const handleNumberChange = (event) =>
  {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) =>
  {
  setNewFilter(event.target.value)
  
  }  
 
  return (
    <>
    <h2>Phonebook</h2>
    <div>
      <input value={newFilter} onChange={handleFilterChange}/>
      <button onClick={() => setShow(!setShow)}>filter</button>
    </div>
    <form onSubmit={addName}>
      <div>
        name: <input value={newName} onChange={handleChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
      <div>
        <button type='submit'>add</button>
      </div>
    </form>
    <h2>Numbers</h2>
    <div>
      {NameToShow.map(names => <li key={names.id}>{names.name} {names.phno}</li>)}
    </div>
    </>
  )
}

export default App
