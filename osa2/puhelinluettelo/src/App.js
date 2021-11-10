import React, { useEffect, useState } from 'react'
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"
import Notification from "./components/Notification"
import personsService from "./services/persons"

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [notificationMessage, setNotificationMessage] = useState(null)
  const [notificationType, setNotificationType] = useState("success")
  const [searchFilter, setSearchFilter] = useState("")

  useEffect(() => {
    personsService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

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

      personsService
        .create(newNameObject)
        .then(returnedPersons => {
          setPersons(persons.concat(returnedPersons))
          setNewName("")
          setNewNumber("")
          showNotification(`Added "${newNameObject.name}"`, "success")
        })
    } else {
      let text = `"${newName}" is already added to the phonebook, replace the old number with a new one?`
      const confirmed = window.confirm(text)

      if (confirmed) {
        const person = persons.find(p => p.name === newName)
        const changedPerson = { ...person, number: newNumber }

        personsService
          .update(person.id, changedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(p =>
              p.id === person.id
                ? returnedPerson
                : p))
            setNewName("")
            setNewNumber("")
            showNotification(`Updated number of "${returnedPerson.name}"`, "success")
          })
          .catch(error => {
            showNotification(`"${person.name}" not found in server.`, "error")
          })
      }
    }
  }

  const handleDeletePerson = (id) => {
    personsService
      .deletePerson(id)
      .then(r => {
        showNotification("Person deleted.", "success")
        setPersons(persons.filter(x => x.id !== id))
      })
  }

  const showNotification = (message, type) => {
    setNotificationMessage(message)
    type === "error" ? setNotificationType("error") : setNotificationType("success")
    setTimeout(() => {
      setNotificationMessage(null)
    }, 2500)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMessage} type={notificationType} />
      <Filter searchFilter={searchFilter} handleFiltering={handleFiltering} />
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNewName={handleNewName}
        newNumber={newNumber}
        handleNewNumber={handleNewNumber}
      />
      <h2>Numbers</h2>
      <Persons
        persons={persons}
        searchFilter={searchFilter}
        deletePerson={handleDeletePerson}
      />
    </div>
  )
}

export default App