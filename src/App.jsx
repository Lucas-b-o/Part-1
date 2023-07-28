import { useState } from 'react'

const StatisticLine = ({ text, value }) => <li>{text} {value}</li>

const Statistics = ({ good, neutral, bad }) => {
  if (good !== 0 || neutral !== 0 || bad !== 0) {
    return (
      <>
        <h1>Statistics</h1>
        <ul>
          <StatisticLine text={'Good'} value={good} />
          <StatisticLine text={'Neutral'} value={neutral} />
          <StatisticLine text={'Bad'} value={bad} />
          <StatisticLine text={'All'} value={good + neutral + bad} />
          <StatisticLine text={'Average'} value={(good - bad) / (good + neutral + bad)} />
          <StatisticLine text={'Positive'} value={good * 100 / (good + neutral + bad)} />
        </ul>
      </>
    )
  } else {
    return <p>No feedback given</p>
  }
}

const Button = ({ setState, text }) => (
  <button onClick={setState}>{text}</button>
)

const App = () => {
  // salve os cliques de cada botão em seu próprio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <h1>Give feedback</h1>
      <div>
        <Button setState={() => setGood(good + 1)} text={'Good'} />
        <Button setState={() => setNeutral(neutral + 1)} text={'Neutral'} />
        <Button setState={() => setBad(bad + 1)} text={'Bad'} />
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App