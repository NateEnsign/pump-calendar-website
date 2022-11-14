const express = require('express')
require('dotenv').config()
const cors = require('cors')
const PORT = process.env.PORT
const path = require('path')

const app = express()

app.use(cors())
app.use(express.json())

const {seed, addWorkout} = require('./controller')






app.post('/seed', seed)
app.post('/addworkout', addWorkout)


app.listen(PORT, () => {console.log('listening on port' + PORT)})

