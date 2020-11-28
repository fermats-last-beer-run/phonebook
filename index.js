const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())
app.use(express.static('build'))
let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456"
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-532532"
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234234"
  },
];

const generateId = () => {
    const maxId = persons.length > 0 
        ? Math.max(...persons.map(n => n.id))
        : 0
    return maxId + 1
}
app.get('/', (request, response) => {
    response.send('Welcome to the server!')
})

app.get('/info', (request, response) => {
    const infoMessage = `<p>Phonebook has info for ${persons.length} people</p>`
    const date = new Date()
    response.send(`${infoMessage} ${date}`)
})

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)

    if(note) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
})

app.post('/api/persons', (request, response) => {
        const body = request.body
        if(!body.number || !body.name) {
            return response.status(400).json({
                error: 'content missing'
            })
        }

        const person = {
            number: body.number,
            name: body.name,
            id: generateId(),
        }

        persons = persons.concat(person)
        response.json(person)
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
