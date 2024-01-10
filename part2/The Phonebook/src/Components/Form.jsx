import React from 'react'

function Form(props) {
  return (
    <div>
      <form onSubmit={props.addName}>
      <div>
        name: <input value={props.newName} onChange={props.handleChange} />
      </div>
      <div>
        number: <input value={props.newNumber} onChange={props.handleNumberChange} />
        </div>
      <div>
        <button type='submit'>add</button>
      </div>
    </form>
    </div>
  )
}

export default Form
