import React from 'react'

function Filter(props) {
  return (
    <div>
      <input value={props.newFilter} onChange={props.handleFilterChange}/>
      <button onClick={() => props.setShow(!props.setShow)}>filter</button>
    </div>
  )
}

export default Filter
