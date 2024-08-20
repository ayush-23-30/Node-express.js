const mongoose = require('mongoose')
const comment = require('../models/comment.model.js')
const todo = require('../models/todo.model.js')

const createComment = async (req,res)=>{
  try {
    const {post , user , content} = req.body;
   
    const comment = new comment({
      post , user , body 
    })

    //save  the new comment into dB (save always wants a object that's why we make a object above)

     const savedComment = await comment.save(); 

     // change in post kyuki new comment add hua hai pehle post search hogi fir usme comment m update 

     const updatedPost = await post.findByIdAndUpdate(post , {$post : {comment : savedComment._id}}, {new : true})
     .populate("comment")
     .exec(); 

     res.json({
      post : updatedPost, 
     })


  } catch (error) {
    return res.status(500 ).json({
      error : "Error while creating comment"
    })
  }
}