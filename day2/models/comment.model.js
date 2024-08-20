const mongoose = require('mongoose')
const Todo = require('./todo.model')


const commentSchema = mongoose.Schema({
  content : {
    type : String, 
    required : true
  }, 
  user : {
    type : String,
    required  : true
  }, 
  post : { 
    type : mongoose.Schema.Types.ObjectId, 
    ref : "Todo" 
  }, 
}, {timestamps : true})


module.exports = mongoose.model("Comment" , commentSchema)