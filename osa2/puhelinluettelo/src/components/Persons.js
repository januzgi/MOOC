import React from "react"

const Persons = ({ persons, searchFilter, deletePerson }) => {
	return (
		<>
			{persons.filter(x => x.name.toLowerCase().includes(searchFilter)).map(x =>
				<div key={x.name}>
					<p>{x.name} {x.number}</p>
					<button onClick={() => window.confirm(`Delete "${x.name}"?`)
						? deletePerson(x.id) : ""}>Delete</button>
				</div>
			)}
		</>
	)
}

export default Persons