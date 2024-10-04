import express from "express";
import { loginController, SignUpController } from "../controllers/userSign.js";

const router = express.Router(); 


router.post("/signUp", SignUpController);
router.post("/login", loginController);


export default router;