// import controller and add a route in it by using express 

import express from 'express'
import TodoController from '../controller/todo.contoller.js'
import {getTodoController , getTodoById} from '../controller/getTodo.controller.js';
import updateTodoController from '../controller/update.controller.js';
import Deletetodo from '../controller/deleteTodo.js';

const router = express.Router(); 

router.post('/create/todo',TodoController); 
router.get('/getAllTodo', getTodoController)
router.get("/getTodos/:id ", getTodoById)
router.put('/updateTodo/:id', updateTodoController)
router.delete('/deleteTodo/:id', Deletetodo)
export default router;