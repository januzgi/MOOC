import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [searchFilter, setSearchFilter] = useState("")

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then((r) => {
        setPersons(r.data)
      })
  })

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