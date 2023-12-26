import React from 'react'

function Total({course}) {
  return (
    <div>{course.parts[0].exercises+course.parts[1].exercises+course.parts[2].exercises}</div>
  )
}

export default Total