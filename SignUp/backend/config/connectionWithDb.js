import { configDotenv } from "dotenv";
import mongoose from "mongoose";
configDotenv(); 

const connectDB = async ()=>{
 await mongoose.connect(process.env.MONGO_DB_URL)
  .then(()=>{
    console.log("Connection is Successfull With DB");
  })
  .catch((err)=>{
    console.log("There are error in connection" , err.message);
    process.exit(1);
  })
}

export default connectDB; 