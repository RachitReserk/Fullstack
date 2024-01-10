import { useState } from 'react'
import './App.css'
import Filter from './Components/Filter'
import Form from './Components/Form'
import Persons from './Components/Persons'

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
    <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} setShow={setShow}></Filter>
    <Form addName={addName} newName={newName} handleChange={handleChange} newNumber={newNumber} handleNumberChange={handleNumberChange}></Form>
    <h2>Numbers</h2>
    <Persons NameToShow={NameToShow}></Persons>
    </>
  )
}

export default App
