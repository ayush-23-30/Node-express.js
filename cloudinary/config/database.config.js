import mongoose from "mongoose";
import { configDotenv } from "dotenv";


configDotenv();

const ConnectionWithDB =  async ()=>{
 await mongoose.connect(process.env.MONGODB_URL)
 .then(()=>{
  console.log("Your mongoDB connection is runninng ");
 })
 .catch((err)=>{
  console.log("MongoDB connection failed!" , err.message);
  process.exit(1);
 })
}
export default ConnectionWithDB; 