import express, { Router } from 'express'
import { loginContoller , signUpController } from '../controller/auth.controller.js';

const router = Router(); 

router.post("/login", loginContoller);
router.post("/signUp", signUpController);


export default router; 