import { User } from "../models/user.model.js";
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'
import { configDotenv } from "dotenv";


configDotenv();

const SignUpController = async (req,res) =>{
  try {
    const {fullName , email ,  password , confirmPassword } = req.body; 

    if(!(fullName || email  || password)) {
      return res.status(404).json({
        success : false, 
        message : "All feilds are required"
      })
    }

    const userExist = await User.findOne({email}); 
    if(userExist){
      return res.status(404).json({
        success : false, 
        message : "User already exists"
      })
    }

    if(password !== confirmPassword){
      console.error("Password is not matched");
      
      return res.status(404).json({
        success : false, 
        message : "Password is not matched "
      })
    }

let hashedPassword;
    try{
       hashedPassword = await bcrypt.hash(password, 10); 
    }catch(error){
      return res.status(404).json({
        success : false, 
        message : "Password is not hashed"
      })
    }

    const user = await User.create({ // save or create 
      fullName, 
      email, 
      password : hashedPassword
    })

    return res.status(200).json({
      user, 
      success : true,
      message : "user is created"
    })

    
  } catch (error) {
    console.error("Error in signUp Controller ", error.message);

    return res.status(401).json({
      success : false, 
      message : "Error found in Sign Up controller", 
      error : error.message
    })
    
  }
}

const loginController = async (req,res) =>{
  try {
    const {email , password} = req.body; 
    if(!email || !password){
      return res.status(404).json({
        success : false, 
        message : "Please fill all the details "
      })
    }

    let user = await User.findOne({email}); 

    if(!email){
      return res.status(404).json({
        success : false, 
        message : "The email is not founded"
      }); 
    }

    const payload = {
      email : user.email, 
      id : user._id
    }
let token;

    if(await bcrypt.compare(password, user.password)){
       token = jwt.sign(payload , process.env.JWT_SECRET_TOKEN , {
        expiresIn: "72h"
      }); 
    }

    user.token = token; 
    user.password = undefined;
    
    return res.status(202).json({
      success : true, 
      token, 
      user,
      message : "user is logged In"
    })


  } catch (error) {
    console.error("Error found in the login Controller" , error.message);

    return res.status(401).json({
      message : "Error in Login Controller", 
      success : false, 
      error : error.message
    })
    
  }
}

export {SignUpController, loginController}