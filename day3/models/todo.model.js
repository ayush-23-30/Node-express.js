// import  mongoose and create a model of todo app

import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
  title : {
    type : String, 
    required : true,
    maxLength : 30,
  }, 
  description : {
    type : String, 
    required : true , 
    maxLength : 150
  }
}, {timestamps : true})

export const Todo = mongoose.model("Todo" , todoSchema); 