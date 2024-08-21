

const express = require('express')
const app = express(); 

const db = require('./config/database.js'); 
db(); 
require('dotenv').config(); 

app.listen(process.env.PORT || 3001 , ()=>{
  console.log("App is running");
})

app.use(express.json()); 

const  todoRoutes = require('./routes/todo.route.js')
app.use("/api/v1", todoRoutes);


// const dummyRoutes = require('./routes/dummy.route.js')
// app.use("/api/v1", dummyRoutes);
// mounting 

 

app.get("/" , (req, res)=>{
  res.send('<h1> this is home page </h1>')
})