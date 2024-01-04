import { useState } from 'react'
import './App.css'
import Course from './Components/Course'
function App() {

  const course = [
    {
    id: 69,
    name: 'Half Stack application development',
    parts: [{
      name: 'Fundamentals of React',
      exercises: 10,
      id: 1
    },
  {
    name: 'Using props to pass data',
    exercises: 7,
    id: 2
  },
{
  name: 'State of a component',
  exercises: 14,
  id: 3
}
]
 },
{
  name: 'Node.js',
  id: 9,
  parts: [
    {
      name: 'Routing',
      exercises: 3,
      id: 11
    },
    {
      name: 'Middlewares',
      exercises: 7,
      id: 12
    }
  ]
}
]

  return (
    <>
    <App course={course[0]}></App>
    <App course={course[1]}></App>
    </>
  )
}

export default App
