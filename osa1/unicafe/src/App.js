import React, { useState } from 'react';

const thStyle = {
  textAlign: "left"
}

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Display = ({ type, count }) => {
  return (
    <tr>
      <th style={thStyle}>{type}:</th>
      <td>{count}</td>
    </tr>
  )
}

const Average = ({ good, neutral, bad, total }) => {
  let average = ((good / total * 100) * 1) + ((neutral / total * 100) * 0) + ((bad / total * 100) * -1);

  return (
    <tr>
      <th style={thStyle}>average:</th>
      <td>{average}</td>
    </tr>
  )
}

const PositiveFeedback = ({ total, good }) => {
  return (
    <tr>
      <th style={thStyle}>positive:</th>
      <td>{good / total * 100}%</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const totalFeedback = good + neutral + bad;
  let feedback = false;
  if (totalFeedback > 0) feedback = true;

  return (
    <>
      <h2>Sadistics</h2>
      <table>
        <tbody>
          {feedback
            ? <>
              <Display type={"good"} count={good} />
              <Display type={"neutral"} count={neutral} />
              <Display type={"bad"} count={bad} />
              <tr>
                <th style={thStyle}>all:</th>
                <td>{totalFeedback}</td>
              </tr>
              <Average total={totalFeedback} good={good} neutral={neutral} bad={bad} />
              <PositiveFeedback total={totalFeedback} good={good} />
            </>
            : <tr><th style={thStyle}>No feedback given yet</th></tr>}
        </tbody>
      </table>
    </>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <h1>Feed back with feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text={"good"} />
      <Button handleClick={() => setNeutral(neutral + 1)} text={"neutral"} />
      <Button handleClick={() => setBad(bad + 1)} text={"bad"} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App