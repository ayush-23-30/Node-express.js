const mongoose = require('mongoose')


const postSchema = mongoose.Schema({
  title : {
    type : String , 
    required : true , 
    maxLength : 30, 
  }, 
  description : {
    type : String ,
    required : true, 
    maxLength : 150 , 
  }, 
  likes :[ {
    type : mongoose.Schema.Types.ObjectId,
    ref : "Like"
  }], 
  comment :[ {
    type : mongoose.Schema.Types.ObjectId,
    ref : "Comment"
  }], 
}, {
  timestamps : true,
})

module.exports = mongoose.model("Post", postSchema)