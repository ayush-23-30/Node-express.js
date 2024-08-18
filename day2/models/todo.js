const mongoose = require('mongoose'); 

const todoSchema = new mongoose.Schema({
  title : {
    type : String, 
    require : true , 
    maxlength : 40 
  }, 
  description : {
    type : String , 
    require : true, 
    maxlength : 100
  }

},{timestamps : true})

module.exports = mongoose.model("Todo" , todoSchema);