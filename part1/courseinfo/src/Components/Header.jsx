import React from 'react'

function Header({course}) {
  console.log(course.name);
  return (
    <div><h1>{course.name}</h1></div>
  )
}

export default Header