//attached environment veriables to the process
require('dotenv').config();

const express = require('express');


//creatd express app
const app = express();

//routing
app.get("/", (req, res) => {
    res.json({ msg: "welcome to the application" })
})


//port listing
app.listen(process.env.PORT, () => {
    console.log("App Listen on port ", process.env.PORT)
})