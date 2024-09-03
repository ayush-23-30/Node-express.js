import bcrypt from 'bcrypt'; 
import {User} from '../models/signUp.model.js'



const loginContoller = async(req,res)=>{




};




const signUpController = async(req,res)=>{
try {
  const {name , email , password , role} = req.body; 
  // check user already exist or not 

const existedUser = await User.findOne({email})

if(existedUser) {
  console.error("the user is already exists")
  return res.status(400).json({
    succes : false , 
    message : " User already Exist"
  })
}


// Secure Your Password 

let HashedPassword; 
try {
  HashedPassword = await bcrypt.hash(password , 10);
  // this will take two arguments - kisko hash karna hai aur kitni bar karna hai. 
} catch (error) {
  return res.status(500).json({
    succes : false , 
    message : "the password is not hashed!"
  })
  
}

// create entry in user 

const user = await User.create({
  name , email, password, role
})
 
 return res.status(200).json({
  success : true, 
  message : "User is created"
 })



} catch (error) {

  res.status(400).json({
    success : false,
    error : error.message,  
    message : "User is not created"
   })
}


}

export  {signUpController , loginContoller};