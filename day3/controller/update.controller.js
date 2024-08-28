import { Todo } from "../models/todo.model.js";


const updateTodoController = async (req, res) =>{

  try {
    const {id} = req.params;
    const {title, description}  = req.body; 

    const todo = await Todo.findByIdAndUpdate(
      {_id : id}, 
      {title, description , timestamps : true}
    )

    res.status(202).json({
      succes : true,
      data : todo, 
      message : "todo has been updated "
    })
    
  } catch (error) {
    console.log(error.message)
    res.status(401).json({
      succes : false, 
      error : error.message, 
      message : "can't update the todos "
    })
    
  }
}

export default updateTodoController;