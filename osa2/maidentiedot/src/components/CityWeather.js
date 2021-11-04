import React, { useState, useEffect } from "react"
import axios from 'axios'

const api_key = process.env.REACT_APP_API_KEY

const CityWeather = ({ city }) => {
	const [cityWeather, setCityWeather] = useState([])

	useEffect(() => {
		axios
			.get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${city}`)
			.then((r) => {
				setCityWeather(r.data.current)
			})
	}, [])

	return (
		<>
			<h2>Weather in {city}</h2>
			<p>
				<b>temperature: </b>
				{cityWeather.temperature} Celsius
			</p>
			<img alt={`Weather icon for ${cityWeather.weather_descriptions}`} src={cityWeather.weather_icons} />
			<p>
				<b>wind: </b>
				{cityWeather.wind_speed} mph direction {cityWeather.wind_dir}
			</p>
		</>
	)
}

export default CityWeather