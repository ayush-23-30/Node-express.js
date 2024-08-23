const Comment = require("../models/comment.model.js");

const Post = require('../models/post.models.js')


exports.createComment = async (req, res) => {
  try {
    const { post, body  } = req.body;

    // Create a new comment object
    const newComment = new Comment({
      post, 
      body
    });

    // Save the new comment into the database
    const savedComment = await newComment.save();

    // Update the corresponding todo with the new comment
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { comments: savedComment._id }},  // Assuming the field is 'comments'
      { new: true }  // Return the updated document
    )
    .populate("comments")  // Assuming you want to populate the 'comments' field
    .exec();

    // Return the updated todo
    res.json({
      post: updatedPost,
    });

  } catch (error) {
    console.error("Error while creating comment", error.message);
    return res.status(500).json({
      error: "Error while creating comment",
    });
  }
};
