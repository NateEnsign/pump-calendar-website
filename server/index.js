const express = require('express')
require('dotenv').config()
const cors = require('cors')
const PORT = process.env.PORT
const path = require('path')

const app = express()

app.use(cors())
app.use(express.json())

const {seed, addWorkout, getChestWorkouts, getLegsWorkouts, getBackWorkouts, getArmsWorkouts, getCoreWorkouts, getCardioWorkouts, deleteChestWorkout} = require('./controller')


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/home.html"))
})
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/home.css"))
})
app.get('/createjs', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/create.js"))
})
app.get('/createhtml', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/create.html"))
})
app.get('/createcss', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/create.css"))
})



app.post('/seed', seed)
app.post('/workouts', addWorkout)
app.get('/chestworkouts', getChestWorkouts)
app.get('/legsworkouts', getLegsWorkouts)
app.get('/backworkouts', getBackWorkouts)
app.get('/armsworkouts', getArmsWorkouts)
app.get('/coreworkouts', getCoreWorkouts)
app.get('/cardioworkouts', getCardioWorkouts)

app.delete('/workouts/:id', deleteChestWorkout)




app.listen(PORT, () => {console.log('listening on port' + PORT)})

