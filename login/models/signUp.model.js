import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
 name : {
  type : String, 
  required : true, 
  trim : true
 }, 
 email : {
  type : String, 
  required : true, 
  trim : true,
 }, 
 password : {
  type : String, 
  required  : true,
 }, role : {
  type : String, 
  enum : ["ADMIN" , "STUDENT" , "VISITOR"]
 }
}, {
  timestamps : true
}); 

export const User = mongoose.model("User", UserSchema); 