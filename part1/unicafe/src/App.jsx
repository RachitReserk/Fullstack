import { useState } from 'react'
import './App.css'
import Button from './assets/Components/Button'
import Statistics from './assets/Components/Statistics'
function App() {
  
const [good,setGood] = useState(0)
const [neutral,setNeutral] = useState(0)
const [bad,setBad] = useState(0)

const OnSmashGood = () =>
{
setGood(good+1)
}
const OnSmashNeutral = () =>
{
setNeutral(neutral+1)
}
const OnSmashBad = () =>
{
setBad(bad+1)
}

return (
  <div>

    <div><h1>give feedback</h1></div>

    <div>
    <Button onSmash={OnSmashGood} text="good"></Button>
    <Button onSmash={OnSmashNeutral} text="neutral"></Button>
    <Button onSmash={OnSmashBad} text="bad"></Button>
    </div>
    <Statistics total={good+bad+neutral} good={good} bad={bad} neutral={neutral}></Statistics>
  </div>

)

}

export default App
