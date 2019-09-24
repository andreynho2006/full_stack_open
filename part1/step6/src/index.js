import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
const Statistics = (props) => {
    if(props.good === 0 && props.neutral === 0 && props.bad === 0) {
        return (
            <div>
                <h1>statistics</h1>
                <p>No feedback given</p>
            </div>
        );
    } else {
        return (
            <div>
                <h1>statistics</h1>
                <p>good: {props.good}</p>
                <p>neutral: {props.neutral}</p>
                <p>bad: {props.bad}</p>
                <p>all: {props.all}</p>
                <p>average: {props.average}</p>
                <p>positive: {props.positive} %</p>
            </div>
        );
    }
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = (good + neutral + bad)
  const average = isNaN((good * 1 + bad * (-1))/all) ? 0 :(good * 1 + bad * (-1))/all;
  const positive = isNaN(good / all)*100 ? 0 : (good / all)*100;

  return (
    <div>
        <h1>give feedback</h1>
        <Button handleClick={() => setGood(good + 1)} text="good" />
        <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
        <Button handleClick={() => setBad(bad + 1)} text="bad" />
        <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            all={all}
            average={average}
            positive={positive} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)