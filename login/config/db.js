import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();

const connectionDB = async ()=>{
  await mongoose.connect(process.env.DB_URL ) 
  .then(()=>{
    console.log("DB connection succesful");
  }).catch((err) =>{
    console.log("DB is not connected" , err);
    process.exit(1);
  })
}

export default connectionDB;