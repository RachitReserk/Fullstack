import { useState , useEffect } from 'react'
import './App.css'
import Filter from './Components/Filter'
import Form from './Components/Form'
import Persons from './Components/Persons'
import axios from 'axios'
import noteService from './services/note'
import Notification from './Components/Notification'

function App() {

  const [persons,setPersons] = useState([])
  const [newName , setNewName] = useState('')
  const [newNumber , setNewNumber] = useState('')
  const [newFilter , setNewFilter] = useState('')
  const [showFilter , setShow] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)
  
  useEffect(() => {
    noteService.getAll().then(response =>
      {
        setPersons(response.data)
      })
  } , [persons])



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
      number : newNumber,
      /* id: persons.length+1, */
    } 
    let flagid = 0;
    let flag='true';
    for(let i=0;i<persons.length;i++)
    {
      if(NameObject.name == persons[i].name)
      {
      flag='false'
      flagid=persons[i].id
      }
    }
    if(flag == 'true')
    {
    noteService
    .create(NameObject)
    .then( response =>
      {
      setPersons(persons.concat(response.data))
      setNewName('')
      setNewNumber('')
      setErrorMessage('Number Added')
      setTimeout( () => setErrorMessage(null) , 3000)
      })
      .catch(error => {
        setErrorMessage('Fail')
      setTimeout( () => setErrorMessage(null) , 3000)
      })
    /* setPersons(persons.concat(NameObject))
    setNewName('')
    setNewNumber('') */
    }
    else
    {
      if(confirm(`${NameObject.name} is already added , want to replace the number ?`))
      {
       noteService
       .update(flagid,NameObject)
       .then(reponse =>
        {
          setErrorMessage('Number Updated')
          setTimeout( () => setErrorMessage(null) , 3000)
        })
        .catch(error => {
          setErrorMessage(`${NameObject.name} is deleted from the server`)
        setTimeout( () => setErrorMessage(null) , 3000)
        })
      }
      /* alert(`${newName} is already added to phonebook`)
      setNewName('') */
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
   
  const handleDelete = (event) =>
  {
   console.log(event.target.id)
   if(confirm(`You sure want to delete ${event.target.value} ?`))
   {
    noteService
    .deleteX(event.target.id)
    .then(response =>
      {
        alert('deleted') 
      })
   }
  }
 
  return (
    <>
    <h2>Phonebook</h2>
    <Notification message={errorMessage}></Notification>
    <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} setShow={setShow}></Filter>
    <Form addName={addName} newName={newName} handleChange={handleChange} newNumber={newNumber} handleNumberChange={handleNumberChange}></Form>
    <h2>Numbers</h2>
    <Persons NameToShow={NameToShow} handleDelete={handleDelete}></Persons>
    </>
  )
}

export default App
