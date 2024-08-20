const mongoose = require('mongoose')
const Todo = require('./todo.model')


const likeSchema = mongoose.Schema({
  posts : {
    type : mongoose.Schema.Types.ObjectId, 
    ref : "Todo"
  }, 
  user : {
    type : String, 
    required : true, 
  }
},{timestamps : true})

module.exports = mongoose.model("Like" , likeSchema)