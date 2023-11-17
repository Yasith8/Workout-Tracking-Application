//attached environment veriables to the process
require('dotenv').config();

const express = require('express');
const workoutRoutes = require('./routes/workouts.js')


//creatd express app
const app = express();

//register the midleware()
//any code that execute between getting request on the server and sending the response
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

app.use(express.json())


//routing
/* app.get("/", (req, res) => {
    res.json({ msg: "welcome to the application" })
})
 */

app.use('/api/workouts', workoutRoutes);


//port listing
app.listen(process.env.PORT, () => {
    console.log("App Listen on port ", process.env.PORT)
})