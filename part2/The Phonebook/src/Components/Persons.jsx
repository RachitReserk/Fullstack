import React from 'react'

function Persons(props) {
  return (
    <div>
    {props.NameToShow.map(names => <li key={names.id}>{names.name} {names.number} <button onClick={props.handleDelete} value={names.name} id={names.id}>delete</button></li>)}
    </div>
  )
}

export default Persons
