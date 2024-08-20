
const todoController = require('../controller/createTodo.controler.js')

const express = require('express')
const router = express.Router(); 

//defining routers 

router.post("/createTodo" ,todoController.createTodo); 

module.exports = router; 