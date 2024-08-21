const Post = require('../models/post.models.js')
const Like = require('../models/like.model.js')


exports.LikePost = async(req, res) =>{
  try {
    const {post} = req.body; 
    const like = new Like({
      post 
    })

    const savedLike = await like.save();

    // update my post collection basics on this 

    const updatePost = await Post.findByIdAndUpdate(post , {$push : {likes : savedLike._id}} , {new : true})
     
    res.json({
      post : updatePost, 

    })

  } catch (error) {
    console.log("this is Like controller having issues ", error.message);
    res.status(400).json({
      error : " Error while Like the posts"
    })
  }
} 

exports.unLikePost = async (req, res)=>{

try {
    const {post , like } = req.body; 
  
    const deleteliked = await Like.findOneAndDelete({post , _id:like})

    const updatePosts = await Post.findByIdAndUpdate(post , {$pull : {likes : deleteliked._id}} , {new: true})

  res.josn({
    updatePosts
  })

} catch (error) {
  console.log("error message from unliked post", error.message);
  res.status(401).json({
    error: "error while unliking the posts"
  })
  
}
}