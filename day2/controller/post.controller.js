const Post = require("../models/post.models.js");

// Create a new post
exports.PostController = async (req, res) => {
  try {
    const { title, description } = req.body;

    const post = new Post({
      title,
      description,
    });

    const savedPost = await post.save();

    res.json({
      post: savedPost,
    });
  } catch (error) {
    console.error("Error in creating a post:", error.message);
    return res.status(400).json({
      error: "Error in creating a post",
      message: error.message, // Include the actual error message in the response
    });
  }
};


exports.getAllPosts = async (req, res) => {
  try {
    const Posts = await Post.find();

    res.json({
      post : Posts
    })
  } catch (error) {
    // Handling errors in fetching posts
    console.error("Error in fetching posts", error);
    return res.status(500).json({
      error: "Error in fetching posts",
    });
  }
};
