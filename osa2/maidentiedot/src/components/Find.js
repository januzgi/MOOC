import React from "react"

const Find = ({ countryName, handleSearch }) => {
	return (
		<>
			find countries:
			<input value={countryName} onChange={handleSearch} />
		</>
	)
}

export default Find