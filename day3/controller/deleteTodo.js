import { Todo } from "../models/todo.model.js";

const Deletetodo = async (req, res) => {
  try {
    const { id } = req.params;
    // const {title, description}  = req.body;

    const todo = await Todo.findByIdAndDelete(
      { _id: id }
      
    );

    res.status(202).json({
      succes: true,
      data: todo,
      message: "todo has been deleted  ",
    });
  } catch (error) {
    console.log(error.message);
    res.status(401).json({
      succes: false,
      error: error.message,
      message: "can't deleted the todos ",
    });
  }
};


export default Deletetodo;  