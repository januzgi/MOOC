import React from "react"
import CityWeather from "./CityWeather"

const Country = ({ country }) => {
	return (
		<>
			<h1>{country.name.common}</h1>
			<p>
				Capital: {country.capital[0]}
			</p>
			<p>
				Population: {country.population}
			</p>
			<h2>Languages</h2>
			<ul>
				{Object.values(country.languages).map(l => <li key={l}>{l}</li>)}
			</ul>
			<img alt={`The flag of ${country.name.common}`} src={country.flags.png} />
			<CityWeather city={country.capital[0]} />
		</>
	)
}

export default Country