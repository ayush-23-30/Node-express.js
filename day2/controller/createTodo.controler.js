// import model;

const todo = require('../models/todo.model.js')

// working extract karna hai title or description ko
// dono ka logical likhna hai 
exports.createTodo = async(req, res) =>{
try {
  const {title , description} = req.body;

  const response = await todo.create({title, description})

  res.status(200).json({
    success : true, 
    data : response, 
    messgae : "entry is created successfully"
  })


} catch (err){
console.log("there is an error in createTodo logic" , err);
res.status(500).json({
  success: false , 
    data : "internal server error", 
    messgae : "entry is failed in creating logic "

})
  
}
} 