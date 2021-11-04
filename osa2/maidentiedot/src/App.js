import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Find from './components/Find'
import Countries from './components/Countries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [countryName, setCountryName] = useState("")

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((r) => {
        setCountries(r.data)
      })
  }, [])

  const handleSearch = (event) => {
    setCountryName(event.target.value.toLowerCase())
  }

  return (
    <>
      <Find countryName={countryName} handleSearch={handleSearch} />
      <Countries countries={countries} countryName={countryName} setCountryName={setCountryName} />
    </>
  );
}

export default App;
