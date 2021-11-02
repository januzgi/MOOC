import React from 'react'

const Header = ({ name }) => {
	return (
		<>
			<h1>{name}</h1>
		</>
	)
}

const Content = ({ parts }) => {
	return (
		<>
			{parts.map(x => <Part key={x.id} part={x.name} exercises={x.exercises} />)}
		</>
	)
}

const Part = ({ part, exercises }) => {
	return (
		<>
			<p>
				{part} {exercises}
			</p>
		</>
	)
}

const Total = ({ parts }) => {
	return (
		<>
			<p style={{ fontWeight: "bold" }}>Number of exercises {
				parts.reduce((sum, x) => (sum + x.exercises), 0)
			}</p>
		</>
	)
}


const Course = ({ course }) => {
	return (
		<>
			<Header name={course.name} />
			<Content parts={course.parts} />
			<Total parts={course.parts} />
		</>
	)
}

export default Course