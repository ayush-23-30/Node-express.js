// authorization checking , isStudent , isAdmin
// auth - user is valid or not

import { configDotenv } from "dotenv";
import jwt from "jsonwebtoken";

configDotenv();

const auth = (req, res , next) =>{
  try {
    // extract jwt token 
    // you can't take token from cookie without intall it 
    // best one is req.header 

    // req ke ander header me se Authorization m se replace kardo "Bearer " + space ko "" empty string reamining is always a token (syntax from jwt token)

  // console.log("cookies :" , req.cookies.token);     
//   console.log("body : " , req.body.token);     
//  console.log("header : " , req.header("Authorization").replace("Bearer " , "")); 


    const token = req.cookies.token || req.body.token || req.header("Authorization").replace("Bearer " , ""); 

    // ways to fetch token from body; We have 3 ways (i).from req.body.token (ii). from req.cookie.token (iii). from req.header("Authorization").replace("Bearer", " ")

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
