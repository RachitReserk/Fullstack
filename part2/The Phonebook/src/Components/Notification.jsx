import React from 'react'

function Notification({message}) {
  if(message===null)
  {
    return null
  }

  return (
    <div className='far fa-check-circle color'>
      {message}
    </div>
  )
}

export default Notification
