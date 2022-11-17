const chestBtn = document.getElementById("chest-btn")
const legsBtn = document.getElementById("legs-btn")
const backBtn = document.getElementById("back-btn")
const armsBtn = document.getElementById("arms-btn")
const coreBtn = document.getElementById("core-btn")
const cardioBtn = document.getElementById("cardio-btn")
const theForm = document.getElementById("submit-form")
const workoutName = document.getElementById("workout-name")
const workoutCategory = document.getElementById("workout-category")
const submitBtn = document.getElementById("submit-btn")
const workoutList = document.getElementById("workout-list")


function addWorkout(event) {
    event.preventDefault()
    if (workoutName.value < 1) {
        alert ('You must enter a name for new workout')
        return
    
    }

    let bodyObj = {
        workoutName: workoutName.value,
        workoutCategory: workoutCategory.value
    }

    axios.post('/workouts', bodyObj)
    .then(() => {
        // alert(bodyObj.workoutName + ' has been added to workouts!')
        Swal.fire(bodyObj.workoutName + ' has been added to workouts!')
    })
    .catch((error) => {
        console.log(error)
    })
    workoutName.value= ''
    workoutCategory.value= ''
}

function getChestWorkouts(){
    workoutList.innerHTML = ''
    axios.get('http://localhost:4031/chestworkouts')
    .then(res => {
        res.data.forEach(elem => {
            console.log(elem)
            let workoutCard = `<div class="workout-card">
                <h2>${elem.name}</h2>
                
                <form id="add-form">
                <label for="add-form">Add to Schedule:</label>
                    <select name="weekday" id="weekday">
                    <option value="" disabled selected>Select Weekday</option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                    <option value="Sunday">Sunday</option>
                    </select>
                    <button class="add-btn">Add</button>
                </form>

                <button class="delete-btn" onclick="deleteChestWorkout(${elem['id']})">Delete</button>
                </div>
            `

            workoutList.innerHTML += workoutCard
        })
    })
}


function getLegsWorkouts(){
    workoutList.innerHTML = ''
    axios.get('http://localhost:4031/legsworkouts')
    .then(res => {
        res.data.forEach(elem => {
            let workoutCard = `<div class="workout-card">
                <h2>${elem.name}</h2>
                <button class="delete-btn" onclick="deleteLegsWorkout(${elem['id']})">Delete</button>
                </div>
            `

            workoutList.innerHTML += workoutCard
        })
    })
}

function getBackWorkouts(){
    workoutList.innerHTML = ''
    axios.get('http://localhost:4031/backworkouts')
    .then(res => {
        res.data.forEach(elem => {
            let workoutCard = `<div class="workout-card">
                <h2>${elem.name}</h2>
                <button class="delete-btn" onclick="deleteBackWorkout(${elem['id']})">Delete</button>
                </div>
            `

            workoutList.innerHTML += workoutCard
        })
    })
}

function getArmsWorkouts(){
    workoutList.innerHTML = ''
    axios.get('http://localhost:4031/armsworkouts')
    .then(res => {
        res.data.forEach(elem => {
            let workoutCard = `<div class="workout-card">
                <h2>${elem.name}</h2>
                <button class="delete-btn" onclick="deleteArmsWorkout(${elem['id']})">Delete</button>
                </div>
            `

            workoutList.innerHTML += workoutCard
        })
    })
}

function getCoreWorkouts(){
    workoutList.innerHTML = ''
    axios.get('http://localhost:4031/coreworkouts')
    .then(res => {
        res.data.forEach(elem => {
            let workoutCard = `<div class="workout-card">
                <h2>${elem.name}</h2>
                <button class="delete-btn" onclick="deleteCoreWorkout(${elem['id']})">Delete</button>
                </div>
            `

            workoutList.innerHTML += workoutCard
        })
    })
}

function getCardioWorkouts(){
    workoutList.innerHTML = ''
    axios.get('http://localhost:4031/cardioworkouts')
    .then(res => {
        res.data.forEach(elem => {
            let workoutCard = `<div class="workout-card">
                <h2>${elem.name}</h2>
                <button class="delete-btn" onclick="deleteCardioWorkout(${elem['id']})">Delete</button>
                </div>
            `

            workoutList.innerHTML += workoutCard
        })
    })
}

function deleteChestWorkout(id) {
    axios.delete(`http://localhost:4031/deletechestworkouts/${id}`)
        .then(() => getChestWorkouts())
        .catch(err => console.log(err))
}

function deleteLegsWorkout(id) {
    axios.delete(`http://localhost:4031/deletelegsworkouts/${id}`)
        .then(() => getLegsWorkouts())
        .catch(err => console.log(err))
}

function deleteBackWorkout(id) {
    axios.delete(`http://localhost:4031/deletebackworkouts/${id}`)
        .then(() => getBackWorkouts())
        .catch(err => console.log(err))
}

function deleteArmsWorkout(id) {
    axios.delete(`http://localhost:4031/deletearmsworkouts/${id}`)
        .then(() => getArmsWorkouts())
        .catch(err => console.log(err))
}

function deleteCoreWorkout(id) {
    axios.delete(`http://localhost:4031/deletecoreworkouts/${id}`)
        .then(() => getCoreWorkouts())
        .catch(err => console.log(err))
}

function deleteCardioWorkout(id) {
    axios.delete(`http://localhost:4031/deletecardioworkouts/${id}`)
        .then(() => getCardioWorkouts())
        .catch(err => console.log(err))
}





chestBtn.addEventListener('click', getChestWorkouts)
legsBtn.addEventListener('click', getLegsWorkouts)
backBtn.addEventListener('click', getBackWorkouts)
armsBtn.addEventListener('click', getArmsWorkouts)
coreBtn.addEventListener('click', getCoreWorkouts)
cardioBtn.addEventListener('click', getCardioWorkouts)
theForm.addEventListener('submit', addWorkout)



