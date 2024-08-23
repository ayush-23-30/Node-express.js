import { Todo } from "../models/todo.model.js";

const getTodoController = async(req,res) =>{
  try {
    //fetch all Todo items from DataBase 


    const todos = await Todo.find({}); 

    res.status (200).json({
      success : true, 
      data : todos, 
      message : "All todos geted"
    })

  } catch (error) {
    console.log(error.message)
    res.status(401).json({
      success: false, 
      error : error.message, 
      message : "donot get the Todos"
    })   
  }
}

const getTodoById = async (req, res) =>{
  try {
    // extract todo item by id
    // id leke toh aao

    const id = req.params.id; 
    const todo = await Todo.findById({ _id:id}); 

    if(!todo){
      res.status(401).json({ 
        message: "id not find", 
        data : todo
      })
    }
     res.status(201).json({
      success : true, 
      data : todo,   
      message : "id finded"
    })

    
  } catch (error) {
    console.log(error.message);
    res.status(401).json({
      success : false, 
      error : error.message, 
      message : "there is an error in getting single todo."
    })
    
  }
}


export  {getTodoController , getTodoById};