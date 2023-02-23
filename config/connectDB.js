// getting-started.js
const mongoose = require('mongoose');

const connectDB = async () => {

  try {
     await mongoose.connect('mongodb://127.0.0.1:27017/firstApp');
     // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
     console.log('Data base connected');

  } catch (error) {
    console.log(error)
    
  }
  
  
}
module.exports = connectDB