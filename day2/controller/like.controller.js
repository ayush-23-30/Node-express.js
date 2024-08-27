const Post = require('../models/post.models.js');
const Like = require('../models/like.model.js');

exports.LikePost = async (req, res) => {
  try {
    const { post } = req.body;

    if (!post) {
      return res.status(400).json({ error: "Post ID is required" });
    }

    const like = new Like({
      post
    });

    const savedLike = await like.save();

    // Update post collection by pushing the like ID
    const updatePost = await Post.findByIdAndUpdate(
      post,
      { $push: { likes: savedLike._id } },
      { new: true }
    );

    res.json({
      post: updatePost,
    });

  } catch (error) {
    console.log("This is Like controller having issues: ", error.message);
    res.status(400).json({
      error: "Error while liking the post"
    });
  }
};

exports.unLikePost = async (req, res) => {
  try {
    const { post, like } = req.body;

    if (!post || !like) {
      return res.status(400).json({ error: "Post ID and Like ID are required" });
    }

    const deleteliked = await Like.findOneAndDelete({ post, _id: like });

    if (!deleteliked) {
      return res.status(404).json({ error: "Like not found" });
    }

    const updatePosts = await Post.findByIdAndUpdate(
      post,
      { $pull: { likes: deleteliked._id } },
      { new: true }
    );

    res.json(updatePosts);

  } catch (error) {
    console.log("Error message from unlike post: ", error.message);
    res.status(401).json({
      error: "Error while unliking the post"
    });
  }
};
