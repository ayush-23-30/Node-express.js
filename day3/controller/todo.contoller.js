// import it model and make its controllers
import { Todo } from "../models/todo.model.js";

const TodoController = async (req, res) => {
  try {
    const { title, description } = req.body;

    const todo = await new Todo({
      title,
      description,
    });

    const savetodo = await todo.save();
    res.json({
      savetodo,
    });
  } catch (error) {
    console.log("error in todo controller", error.message);

    res.status(501).json({
      error: "error while creating todo",
      message: " there is an error in creating Todo",
    });
  }
};
export default TodoController;
