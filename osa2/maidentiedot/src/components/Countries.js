import React from "react"
import Country from "./Country"

const Results = ({ countries, countryName, setCountryName }) => {
	const foundCountries = countries.filter(x => x.name.common.toLowerCase().includes(countryName))
	let morePreciseSearchNeeded = true;
	let showDetails = false;
	if (foundCountries.length <= 10) morePreciseSearchNeeded = false;
	if (foundCountries.length === 1) showDetails = true;

	return (
		<>
			{showDetails
				? (<Country country={foundCountries[0]} />)
				: (morePreciseSearchNeeded
					? <p>Too many matches, specify another filter</p>
					: foundCountries.map(x => (
						<div key={x.name.common}>
							<p>{x.name.common}</p>
							<button onClick={() => setCountryName(x.name.common.toLowerCase())}>show</button>
						</div>
					))
				)
			}
		</>
	)
}

export default Results