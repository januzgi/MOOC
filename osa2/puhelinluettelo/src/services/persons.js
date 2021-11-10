import axios from "axios"
const baseUrl = "http://localhost:3001/persons"

const getAll = () => {
	const request = axios.get(baseUrl)
	return request.then(r => r.data)
}

const create = (newPerson) => {
	const request = axios.post(baseUrl, newPerson)
	return request.then(r => r.data)
}

const deletePerson = (id) => {
	const request = axios.delete(`${baseUrl}/${id}`)
	return request.then(r => r.data)
}

const update = (id, newObject) => {
	const request = axios.put(`${baseUrl}/${id}`, newObject)
	return request.then(r => r.data)
}

const personsObject = { getAll, create, deletePerson, update }
export default personsObject