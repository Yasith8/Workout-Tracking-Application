const express = require('express');
const { createWorkout, deleteWorkout, updateWorkout, getWorkOuts, getWorkout } = require('../controller/workoutController')
const router = express.Router();

const Workout = require('../models/Workout')

//GET all workout
/* router.get('/', (req, res) => {
    res.json({
        msg: "GET all workouts",
    })
})
 */
router.get('/', getWorkOuts)


//GET a single Workoutn
/* router.get('/:id', (req, res) => {
    res.json({
        id: 2,
        name: "customized workout"
    })
}) */
router.get('/:id', getWorkout)


//POST a new workout
/* router.post('/', async(req, res) => {
    const { title, load, reps } = req.body

    try {
        const workout = await Workout.create({ title, load, reps })
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
    res.json({ msg: "post a new workout" }) 

}) */

router.post('/', createWorkout)

//POST a new workout(self practice)
router.post('/:id', (req, res) => {
    const student = ["kamal", "nimal", "sunil", "supun"]
    res.json({
        msg: "post a new students",
        st: student[req.params.id]
    })
})

//DELETE a new workout
/* router.delete('/:id', (req, res) => {
    res.json({
        msg: "Delete a new workout"
    })
})
 */
router.delete('/:id', deleteWorkout)




//UPDTAE a new workout
/* router.patch('/:id', (req, res) => {
    res.json({ msg: "Update a new workout" })
}) */

router.patch('/:id', updateWorkout)



//export rounter
module.exports = router;