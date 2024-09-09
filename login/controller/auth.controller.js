import bcrypt from "bcrypt";
import { User } from "../models/signUp.model.js";
import jwt from 'jsonwebtoken'
import { configDotenv } from "dotenv";

configDotenv();

const loginContoller = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        succes: false,
        message: "Please fill all the details carefully",
      }); 
    }

    let user = await User.findOne({ email });
    if (!email) {
      return res.status(404).json({
        success: false,
        message: "The email doesnot matches",
      });
    }

    const payload = {
      email : user.email, 
      id : user._id, 
      role : user.role
    }

    if (await bcrypt.compare(password, user.password)) {
      // agar sahi hai
      let token = jwt.sign(payload ,process.env.JWT_SECRET_TOKEN, 
  {
    expiresIn : "2h"
  });

  user = user.toObject(); // now the user is forced to convert into object - because we can't push the token and password in the object normally 
  user.token = token; 
  user.password = undefined;

  const options = {
    expires : new Date( Date.now() + 3 * 24 * 60 * 60 * 1000 ), 
    httpOnly : true, 
  }

  res.cookie("token", token , options).status(200).json({
    sucess : true, 
    token, 
    user, 
    message : " user is logged In"
  })

    } else {
      return res.status(402).json({
        success: false,
        message: "password does not matched!",
      });
    }
  } catch (error) {
    console.log("error is login feild ", error.message);
    return res.status(500).json({
      success: false,
      error: error.message,
      message: " login failed !",
    });
  }
};

const signUpController = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    // check user already exist or not

    const existedUser = await User.findOne({ email });

    if (existedUser) {
      console.error("the user is already exists");
      return res.status(400).json({
        succes: false,
        message: " User already Exist",
      });
    }

    // Secure Your Password

    let hashedPassword;
    try {
      hashedPassword = await bcrypt.hash(password, 10);
      // this will take two arguments - kisko hash karna hai aur kitni bar karna hai.
    } catch (error) {
      return res.status(500).json({
        succes: false,
        message: "the password is not hashed!",
      });
    }
    // create entry in user
    const user = await User.create({
      name,
      email,
      password : hashedPassword,
      role,
    });

    return res.status(200).json({
      user,
      success: true,
      message: "User is created",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
      message: "User is not created",
    });
  }
};

export { signUpController, loginContoller };

// bhai - token "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkJoYWlKQUFOQGdtYWlsLmNvbSIsImlkIjoiNjZkZWRiNDQ3NmYxNjhhZGQ2MmFmYmIzIiwicm9sZSI6IlNUVURFTlQiLCJpYXQiOjE3MjU4ODExOTcsImV4cCI6MTcyNTg4ODM5N30.APOvhbuJc80URlcu38tLmxaihqO8e3uiD9M0OQetdDE"