import { configDotenv } from 'dotenv'
import express from 'express'
import connectDB from './config/connectionWithDb.js';
import cors from "cors"
import router from './routers/user.router.js';

configDotenv(); 

const app = express();
connectDB(); 

app.use(express.json()); 
app.use(cors({
  origin : "*"
}))

app.get("/",(req,res) =>{
  res.json({
    data : "Hello backend Server!"
  })
})

app.use('/api/v1/', router)


app.listen(process.env.PORT, ()=>{
  console.log("Server is started ");
})
