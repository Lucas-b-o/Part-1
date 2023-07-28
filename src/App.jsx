import { useState } from 'react'

const App = () => {
  // salve os cliques de cada botão em seu próprio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <h1>Give feedback</h1>
      <div>
        <button onClick={() => setGood(good + 1)}>Good</button>
        <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
        <button onClick={() => setBad(bad + 1)}>Bad</button>
      </div>
      <h1>Statistics</h1>
      <ul>
        <li>Good {good}</li>
        <li>Neutral {neutral}</li>
        <li>Bad {bad}</li>
      </ul>
    </>
  )
}

export default App