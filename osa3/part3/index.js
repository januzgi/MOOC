require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")
const Note = require("./models/note")

const requestLogger = (req, res, next) => {
	console.log("Method:", req.method);
	console.log("Path:", req.path);
	console.log("Body:", req.body);
	console.log("---");
	next()
}

app.use(express.static("build"))
app.use(cors())
app.use(express.json())
app.use(requestLogger)

let notes = [
	{
		id: 1,
		content: "HTML is easy",
		date: "2020-01-10T17:30:31.098Z",
		important: true
	},
	{
		id: 2,
		content: "Browser can execute only Javascript",
		date: "2020-01-10T18:39:34.091Z",
		important: false
	},
	{
		id: 3,
		content: "GET and POST are the most important methods of HTTP protocol",
		date: "2020-01-10T19:20:14.298Z",
		important: true
	}
]

app.get("/", (req, res) => {
	res.send("<h1>Hello World!</h1>")
})

app.get("/api/notes", (req, res) => {
	Note.find({}).then(n => {
		res.json(n);
	})
})

app.get("/api/notes/:id", (request, response) => {
	Note.findById(request.params.id).then(note => {
		response.json(note)
	})
})

app.delete("/api/notes/:id", (request, response) => {
	const id = Number(request.params.id)
	notes = notes.filter(note => note.id !== id)

	response.status(204).end()
})

app.post("/api/notes", (request, response) => {
	const body = request.body
	if (!body.content) {
		return response.status(400).json({
			error: "content missing"
		})
	}

	const note = new Note({
		content: body.content,
		important: body.important || false,
		date: new Date(),
	})

	note.save().then(savedNote => {
		response.json(savedNote)
	})
})

const PORT = process.env.PORT
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})