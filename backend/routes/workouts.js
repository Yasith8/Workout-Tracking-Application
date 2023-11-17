const express = require('express');

const router = express.Router();

//GET all workout
router.get('/', (req, res) => {
    res.json({
        msg: "GET all workouts",
    })
})

//GET a single Workout
router.get('/:id', (req, res) => {
    res.json({
        id: 2,
        name: "customized workout"
    })
})

//POST a new workout
router.post('/', (req, res) => {
    res.json({ msg: "post a new workout" })
})

//POST a new workout(self practice)
router.post('/:id', (req, res) => {
    const student = ["kamal", "nimal", "sunil", "supun"]
    res.json({
        msg: "post a new students",
        st: student[req.params.id]
    })
})

//DELETE a new workout
router.delete('/:id', (req, res) => {
    res.json({
        msg: "Delete a new workout"
    })
})

//UPDTAE a new workout
router.patch('/:id', (req, res) => {
    res.json({ msg: "Update a new workout" })
})



//export rounter
module.exports = router;