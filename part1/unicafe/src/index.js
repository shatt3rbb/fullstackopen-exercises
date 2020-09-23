import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({ headtext} ) => (
  <h1>{headtext}</h1>
)

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistic = ({ text, value }) => (
  <>
  <td>{text}</td>
  <td>{value}</td>
  </>
)

const Statistics = ({ statstext, good, neutral, bad }) => {
  const all = good + neutral + bad
  const average = (good*1 + bad*(-1))/all
  const positive = (good/all)*100 + '%'
  if (all === 0) {
  return (
  <>
  <h1>{statstext}</h1>
  <p>No feedback given</p>
  </>
  )
  }
  return (
  <>
  <h1>{statstext}</h1>
  <table>
    <tr>
  <Statistic text="good" value={good} />
    </tr>
    <tr>
  <Statistic text="neutral" value={neutral} />
    </tr>
    <tr>
  <Statistic text="bad" value={bad} />
    </tr>
    <tr>
  <Statistic text="all" value={all} />
    </tr>
    <tr>
  <Statistic text="average" value={average} />
    </tr>
    <tr>
  <Statistic text="positive" value={positive} />
    </tr>
  </table>
  </>
  )
}


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Header headtext="give feedback"/>
      <Button onClick={handleGoodClick} text="good" />
      <Button onClick={handleNeutralClick} text="neutral" />
      <Button onClick={handleBadClick} text="bad" />
      <Statistics statstext="statistics" good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
