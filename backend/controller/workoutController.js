const Workout = require('../models/Workout')
const mongoose = require('mongoose')

//get all workout
const getWorkOuts = async(req, res) => {
    const workouts = await Workout.find({}).sort({ createdAt: -1 })

    res.status(200).json(workouts)
}

//get single workout
const getWorkout = async(req, res) => {
    const { id } = req.params

    //if id not valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send("No workout with this ID")
    }

    const workout = await Workout.findById(id)

    if (!workout) {
        return res.status(400).json("No workout with this id")
    }

    res.status(200).json(workout)
}

//create new workout
const createWorkout = async(req, res) => {
    const { title, load, reps } = req.body

    let emptyFields = []

    if (!title) {
        emptyFields.push('title');
    }
    if (!load) {
        emptyFields.push('load');
    }
    if (!reps) {
        emptyFields.push('reps');
    }

    if (emptyFields.length > 0) {
        return res.status(400).json({ error: "Please fill in all the Field", emptyFields })
    }

    //add doc to odb
    try {
        const workout = await Workout.create({ title, load, reps })
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//delete workout
const deleteWorkout = async(req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send("No workout with this ID")
    }

    const workout = await Workout.findByIdAndDelete({ _id: id })

    if (!workout) {
        return res.status(400).json("No workout with this id")
    }

    res.status(200).json(workout)


}

//update workout
const updateWorkout = async(req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send("No workout with this ID")
    }

    const workout = await Workout.findOneAndUpdate({ _id: id }, {
        ...req.body
    });

    if (!workout) {
        return res.status(400).json("No workout with this id")
    }

    res.status(200).json(workout)
}





module.exports = {
    createWorkout,
    deleteWorkout,
    getWorkOuts,
    getWorkout,
    updateWorkout
}