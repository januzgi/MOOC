import React from "react"

const Persons = ({ persons, searchFilter }) => {
	return (
		<>
			{persons.filter(x => x.name.toLowerCase().includes(searchFilter)).map(x => <p key={x.name}>{x.name} {x.number}</p>)}
		</>
	)
}

export default Persons