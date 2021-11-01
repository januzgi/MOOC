import React, { useState } from 'react'

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length));

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }

  const addVote = () => {
    let newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  }

  const style = {
    display: "block"
  }

  const mostVotedAnecdote = () => {
    let mostVoted = -1;
    let mostVotedIndex = -1;

    votes.forEach((e, index) => {
      if (e > 0) {
        if (e > mostVoted) {
          mostVoted = e;
          mostVotedIndex = index;
        }
      }
    });

    if (mostVotedIndex >= 0) {
      return (
        <>
          <p>"{anecdotes[mostVotedIndex]}"</p>
          <p>has {mostVoted} votes.</p>
        </>
      )
    }
  }

  return (
    <div style={style}>
      <h2>Anecdote of the day</h2>
      <div style={style}>"{anecdotes[selected]}"</div>
      <div style={style}>has {votes[selected]} votes.</div>
      <Button handleClick={() => setSelected(getRandomInt(anecdotes.length))} text={"Next anecdote"} />
      <Button handleClick={() => addVote()} text={"Vote"} />
      <div style={style}>
        <h2>Anecdote with most votes</h2>
        {mostVotedAnecdote()}
      </div>
    </div>
  )
}

export default App
