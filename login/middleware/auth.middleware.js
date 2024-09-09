// authorization checking , isStudent , isAdmin
// auth - user is valid or not

import { configDotenv } from "dotenv";
import jwt from "jsonwebtoken";

configDotenv();

const auth = (req, res , next) =>{
  try {
    // extract jwt token 
    const token = req.body.token || req.cookies.token; 
    if(!token){
      return res.status(303).json({
        success : false, 
        message : "token is not available || not extracted "
      })
    }

    // verify the token 
    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET_TOKEN)
      console.log(decode);
      
      req.user =  decode; 
      // this is one of the most important thing it sends the decoded msg to user then you can find the payload and inside it the role. 
    } catch (error) {
      return res.json({
        success : false , 
        message : "token is invalid in decoding"
      })
    }
     next(); 
  } catch (error) {
    return res.status(404).json({
      success : false , 
      message : "something went wrong when verifying the token"
    })
  }
}


const isStudent = (req,res,next) =>{
  try {
    if(req.user.role !== "STUDENT"){
      return res.status(401).json({
        success : false , 
        message : "this a protected route only for students !"
      })
    }
     // if the user . role === student , then we pass the success result inside the route 
     next();

    
  } catch (error) {
    return res.status(404).json({
      success : false , 
      message : "something went wrong when wenting to the student portal"
    })
  }
}
const isAdmin = (req,res,next) =>{
  try {
    if(req.user.role !== "ADMIN"){
      return res.status(401).json({
        success : false , 
        message : "this a protected route only for ADMIN!"
      })
    }
     // if the user . role === ADMIN , then we pass the success result inside the route 
     next();

    
  } catch (error) {
    return res.status(404).json({
      success : false , 
      message : "something went wrong when wenting to the role of admin"
    })

  }
}


export {auth , isAdmin,isStudent} ;
