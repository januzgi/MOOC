import React from 'react'
import Course from "./components/Course"

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          id: 1,
          name: 'Fundamentals of React',
          exercises: 10
        },
        {
          id: 2,
          name: 'Using props to pass data',
          exercises: 7
        },
        {
          id: 3,
          name: 'Using props to pass Python tests',
          exercises: 41
        },
        {
          id: 4,
          name: 'Using imagination for beautiful design and CSS',
          exercises: 99
        },
        {
          id: 5,
          name: 'State of a component',
          exercises: 14
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          id: 1,
          name: 'Routing',
          exercises: 11
        },
        {
          id: 2,
          name: 'Middleware',
          exercises: 3
        },
        {
          id: 3,
          name: 'Callback async functions',
          exercises: 24
        }
      ]
    }
  ]

  return (
    <>
      <h1>Web development curriculum</h1>
      {courses.map(x => <Course key={x.id} course={x} />)}
    </>
  )
}

export default App