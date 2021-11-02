import React from 'react'
import Note from './components/Note'

const App = ({ notes }) => {

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(x => <Note key={x.id} note={x} />)}
      </ul>
    </div>
  )
}

export default App