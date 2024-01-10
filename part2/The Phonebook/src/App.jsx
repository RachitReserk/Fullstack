import { useState , useEffect } from 'react'
import './App.css'
import Filter from './Components/Filter'
import Form from './Components/Form'
import Persons from './Components/Persons'
import axios from 'axios'

function App() {

  const [persons,setPersons] = useState([])
  const [newName , setNewName] = useState('')
  const [newNumber , setNewNumber] = useState('')
  const [newFilter , setNewFilter] = useState('')
  const [showFilter , setShow] = useState(true)
  
  useEffect(() => {
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
      setPersons(response.data)
    })
  } , [])



  const NameToShow = showFilter ? persons : persons.filter((nameobj) => 
  {
    if(newFilter==='')
    return nameobj
    else if(nameobj.name.toUpperCase() == newFilter.toUpperCase())
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
    <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} setShow={setShow}></Filter>
    <Form addName={addName} newName={newName} handleChange={handleChange} newNumber={newNumber} handleNumberChange={handleNumberChange}></Form>
    <h2>Numbers</h2>
    <Persons NameToShow={NameToShow}></Persons>
    </>
  )
}

export default App
