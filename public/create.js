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
const workoutDisplay = document.getElementById("workout-display")

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



// chestBtn.addEventListener('click', getChestWorkouts)
// legsBtn.addEventListener('click', getLegsWorkouts)
// backBtn.addEventListener('click', getBackWorkouts)
// armsBtn.addEventListener('click', getArmsWorkouts)
// coreBtn.addEventListener('click', getCoreWorkouts)
// cardioBtn.addEventListener('click', getCardioWorkouts)
theForm.addEventListener('submit', addWorkout)

