import express from 'express'
import { configDotenv } from 'dotenv';
import ConnectionWithDB from './config/database.config.js';
import cloudinaryConnect from './config/cloundiary.config.js';
import fileUpload from 'express-fileupload';
import routeUploader from './router/FileUpload.router.js';

configDotenv();


const app = express(); 
app.use(express.json());
app.use(fileUpload({
  useTempFiles : true,
  tempFileDir : '/tmp/'
})); 
 

ConnectionWithDB(); 
cloudinaryConnect() 

app.use("/api/v1/upload" , routeUploader); 

app.listen(process.env.PORT , ()=>{
  console.log("Your server is running successfully on" , process.env.PORT);
})
