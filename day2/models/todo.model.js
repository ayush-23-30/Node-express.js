const mongoose = require('mongoose'); 
const Like = require('./like.model')
const Comment = require('./comment.model')



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
  }, 
  like : [{
    type : mongoose.Schema.Types.ObjectId, 
    ref : "Like"
  }], 
  comment : [{
    type : mongoose.Schema.Types.ObjectId, 
    ref : "Comment"
  }]

},{timestamps : true})

module.exports = mongoose.model("Todo" , todoSchema);