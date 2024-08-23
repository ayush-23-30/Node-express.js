import express from 'express'
import dbConnect from "./config/mongoDB.js";
import router from './routes/todo.route.js';

const app = express(); 

dbConnect(); 

const port = 3001 || 3005; 

app.listen(port , ()=>{
  console.log("your server is running on port " + port);
})

app.use(express.json()); 
app.use('/api/v1', router); 

app.get("/" , (req,res)=>{
  res.send("Hello coder!")
})


