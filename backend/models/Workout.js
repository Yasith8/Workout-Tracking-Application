const mongoose = require("mongoose");

const Schema = mongoose.Schema

//create new schema(add rules and validations)
const workoutSchema = new Schema({
        title: {
            type: String,
            required: true
        },
        reps: {
            type: Number,
            required: true
        },
        load: {
            type: Number,
            required: true
        }
    },
    //when document was created add app property 
    // When a document is created, add 'createdAt' and 'updatedAt' timestamps
    { timestamps: true }
)

//create model
module.exports = mongoose.model('workout', workoutSchema)