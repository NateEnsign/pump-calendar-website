const chestBtn = document.getElementById("chest-btn")
const legsBtn = document.getElementById("legs-btn")
const backBtn = document.getElementById("back-btn")
const armsBtn = document.getElementById("arms-btn")
const coreBtn = document.getElementById("core-btn")
const cardioBtn = document.getElementById("cardio-btn")
const theForm = document.getElementById("submit-form")
const enterWorkout = document.getElementById("enter-workout")
const workoutCategory = document.getElementById("workout-category")
const submitBtn = document.getElementById("submit-btn")
const workoutDisplay = document.getElementById("workout-display")

function addWorkout(event) {
    event.preventDefault()

    if (enterWorkout.value < 1) {
        alert ('You must enter a name for new workout')
        return
    }

    let bodyObj = {
        name: enterWorkout.value,
        categoryId: +workoutCategory.value
    }

    axios.post('http://localhost:4031/addworkout', bodyObj)
    .then(() => {
        enterWorkout.value = ''
        workoutCategory.value = 1
        alert(bodyObj.name + ' has been added workouts!')
    })
    .catch(() => {
        console.log('error: something went wrong adding workout')
    })
}

// function getChestWorkouts() {
//     axios.get('')
//     .then((response) => {
//         let chestArray = response.data

//         for (let i = 0; i < chestArray.length; i++){
//             let chest = chestArray[i]
//             let chestContainerElement = document.createElement('div')
//             let chestWorkoutNameElement = document.createElement('span')

            
//         }
//     })
// }

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
legsBtn.addEventListener('click', getLegsWorkouts)
backBtn.addEventListener('click', getBackWorkouts)
armsBtn.addEventListener('click', getArmsWorkouts)
coreBtn.addEventListener('click', getCoreWorkouts)
cardioBtn.addEventListener('click', getCardioWorkouts)
theForm.addEventListener('submit', addWorkout)

