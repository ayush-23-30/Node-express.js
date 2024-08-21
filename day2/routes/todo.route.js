const createComment = require("../controller/comment.controller.js");
const { PostController, getAllPosts } = require("../controller/post.controller.js");
const {LikePost , unLikePost} = require("../controller/like.controller.js")

const express = require("express");
const router = express.Router();

// Defining routes

// Route for creating a post
router.post("/post/create", PostController);

// Route for creating a comment
router.post("/comments/create", createComment.createComment);

router.post('/liked/posts' , LikePost)
router.post('/unliked/posts' , unLikePost)
// Route for getting all posts (use GET instead of POST)
router.get('/posts', getAllPosts);

module.exports = router;
