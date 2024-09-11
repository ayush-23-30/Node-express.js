import express, { Router } from 'express'
import { loginContoller , signUpController } from '../controller/auth.controller.js';
import {auth , isStudent , isAdmin } from '../middleware/auth.middleware.js'
import { User } from '../models/signUp.model.js';

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

router.get("/getEmail", auth, async (req,res) =>{
  try {
    const id = req.user.id; 
    const user = await User.findById(id);
    console.log("ID : ", id);
    
    res.json({
      success : true,
      message : " ID finding route" ,
      user : user
      
    })
  } catch (error) {
    res.status(402).json({
      error : error.message, 
      message : " can't get the id of email"
    })
  }
})

export default router; 

// COOKIE - Parser 