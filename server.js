
// import express
const express = require('express')
// import data base
const connectDB = require('./config/connectDB.js')
// Initialize the app
const app = express()
// config dotenv
require('dotenv').config()
connectDB()
// create middelware
app.use(express.json())

app.use('/person' , require('./routes/person'))
const PORT = process.env.PORT || 5000

// creaation of the server
app.listen(PORT,(err)=>{err?console.log(err):console.log('Server is running on port' + PORT)})
