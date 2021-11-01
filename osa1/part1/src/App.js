import React, { useState } from "react"

const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age;

  return (
    <>
      <p>Hello {name}, you're {age} old.</p>
      <p>So this means you were probably born in {bornYear()}</p>
    </>
  )
}

const Display = ({ counter }) => (<h2>{counter}</h2>);
const Button = ({ handleClick, text }) => (<button onClick={handleClick}>{text}</button>);

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <p>Press buttons to activate the app</p>
    )
  }
  return (
    <p>history: {props.allClicks.join(" ")}</p>
  )
}

const App = () => {
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => setCounter(counter + 1);
  const reduceByOne = () => setCounter(counter - 1);
  const resetToZero = () => setCounter(0);

  // Monimutkaisempi tila
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    setLeft(left + 1);
  }
  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    setRight(right + 1);
  }

  return (
    <>
      <h1>Greetings</h1>
      {/* Monimutkaisempi tila */}
      {left}
      <Button handleClick={handleLeftClick} text="left" />
      <Button handleClick={handleRightClick} text="right" />
      {right}
      <History allClicks={allClicks} />
      {/* Monimutkaisempi tila */}

      <Hello name="Teku" age="12" />
      <Hello name="Ketku" age="22" />
      <Display counter={counter} />
      <Button handleClick={increaseByOne} text={"Plus"} />
      <Button handleClick={reduceByOne} text={"Minus"} />
      <Button handleClick={resetToZero} text={"Reset"} />
    </>
  )
}

export default App