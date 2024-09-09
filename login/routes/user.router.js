import express, { Router } from 'express'
import { loginContoller , signUpController } from '../controller/auth.controller.js';
import {auth , isStudent , isAdmin } from '../middleware/auth.middleware.js'

const router = Router(); 

router.post("/login", loginContoller);
router.post("/signUp", signUpController);

// protected route [jiske pass access hai vahi dekh sakta hai, selected by role]

router.get("/test", auth,(req,res) =>{
  res.json({
    success : true , 
    message  : "this is a testing middle ware route"
  })
})

router.get("/student" , auth , isStudent,(req , res) =>{
res.json({
  success : true,
  message : "Welcome in Student Protected Route "
})
})
router.get("/admin" , auth , isAdmin,(req , res) =>{
res.json({
  success : true,
  message : "Welcome in Admin Protected Route "
})
})



export default router; 

// COOKIE - Parser 