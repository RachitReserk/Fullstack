import React from 'react'

function Statistics({total,good,bad,neutral}) {
    if(total===0)
    {
    return (
        <div>
         <p>No feedback given</p>
        </div>
    )
    }
  return (
<div>
<div><h1>statistics</h1></div>
<table>
    <tbody>
    <tr>
    <td>good</td>
    <td>{good}</td>
    </tr>
    <tr>
        <td>neutral</td>
        <td>{neutral}</td>
    </tr>
    <tr>
      <td>bad</td>
      <td>{bad}</td>  
    </tr>
    <tr>
     <td>all</td>
     <td>{good+bad+neutral}</td>
    </tr>
    <tr>
        <td>average score</td>
        <td>{((1*good)+(0*neutral)+(-1*bad))/3}</td>
    </tr>
    <tr>
        <td>positive</td>
        <td>{(good/(good+bad+neutral))*100}</td>
    </tr>
    </tbody>   
</table>
</div>
  )
}

export default Statistics