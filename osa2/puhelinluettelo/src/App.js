import React, { useState } from 'react'
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [searchFilter, setSearchFilter] = useState("")

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFiltering = (event) => {
    setSearchFilter(event.target.value.toLowerCase())
  }

  const addPerson = (event) => {
    event.preventDefault();
    let names = persons.map(x => x.name);

    if (!names.includes(newName)) {
      const newNameObject = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(newNameObject))
      setNewName("")
      setNewNumber("")
    } else {
      alert(`${newName} is already added to phonebook.`)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchFilter={searchFilter} handleFiltering={handleFiltering} />
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNewName={handleNewName}
        newNumber={newNumber}
        handleNewNumber={handleNewNumber}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} searchFilter={searchFilter} />
    </div>
  )

}

export default App