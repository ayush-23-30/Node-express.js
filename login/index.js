import express from 'express'
import connectionDB from './config/db.js';
import router from './routes/user.router.js';


const app = express(); 

connectionDB(); 

app.use(express.json()); 

app.use('/api/v1' , router); 

app.listen(process.env.PORT || 4002,()=>{
  console.log("server is running successful! ");
  
})