import React from 'react'

const Filter = ({ searchFilter, handleFiltering }) => {
	return (
		<>
			filter with name:
			<input value={searchFilter} onChange={handleFiltering} />
		</>
	)
}

export default Filter