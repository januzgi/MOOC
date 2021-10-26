import React from 'react'

const Hello = (props) => {
  return (
    <>
      <p>Hello {props.name}, you're {props.age} old.</p>
    </>
  )
}

const App = () => {
  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Teku" age="12" />
      <Hello name="Ketku" age="22" />
    </>
  )
}

export default App