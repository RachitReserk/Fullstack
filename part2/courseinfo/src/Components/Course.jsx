import React from 'react'

function Course({course}) {
    let sum = 0
/* 
    let totalarr = course.parts.map(arr => arr.exercises)

        for (let index = 0; index < totalarr.length; index++)
         {
         sum = sum+totalarr[index];  
        } */

        const UsingReduce = course.parts.reduce((store,arrz) => store+(arrz.exercises) , sum )

  return (
    <div>
        <>
        <h1>{course.name}</h1>
        </>
        <div>
         <p>{course.parts.map((arr) => { 
            return <li key={arr.id}>{arr.name + " " +arr.exercises}</li>
         })}</p>
         <b>total of {UsingReduce} exercises</b> 
    </div>
    </div>
    
  )
}

export default Course