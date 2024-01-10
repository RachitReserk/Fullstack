import React from 'react'

function Persons(props) {
  return (
    <div>
    {props.NameToShow.map(names => <li key={names.id}>{names.name} {names.phno}</li>)}
    </div>
  )
}

export default Persons
