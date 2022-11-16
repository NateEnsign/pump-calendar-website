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
        alert(bodyObj.workoutName + ' has been added to workouts!')
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
            let workoutCard = `<div class="workout-card">
                <h2>${elem.name}</h2>
                <button onclick="deleteCard(${elem['workouts_id']})">Delete</button>
                </div>
            `

            workoutList.innerHTML += workoutCard
        })
    })
}




// function getLegsWorkouts() {

// }

// function getBackWorkouts() {

// }

// function getArmsWorkouts() {

// }

// function getCoreWorkouts() {

// }

// function getCardioWorkouts() {

// }



chestBtn.addEventListener('click', getChestWorkouts)
// legsBtn.addEventListener('click', getLegsWorkouts)
// backBtn.addEventListener('click', getBackWorkouts)
// armsBtn.addEventListener('click', getArmsWorkouts)
// coreBtn.addEventListener('click', getCoreWorkouts)
// cardioBtn.addEventListener('click', getCardioWorkouts)
theForm.addEventListener('submit', addWorkout)

