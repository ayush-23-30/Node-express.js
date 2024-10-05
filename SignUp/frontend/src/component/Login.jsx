import React, { useState } from 'react'
import { FaArrowRight ,FaEyeSlash , FaEye  } from "react-icons/fa";
import { Link } from 'react-router-dom';


function Login() {
  const [eyes , setEyes] = useState(false);

  const [data , setData] = useState({
    email : "",
    password : ""
  })
  

  const handleLogin = (e)=>{
    e.preventDefault(); 
    console.log(data);
}

const toggle = ()=>{
  setEyes(!eyes); 
}

  return (
    <div className='flex items-center h-screen justify-center'>
      <div className="bg-white h-96 rounded-full
       flex items-center shadow-xl w-96 justify-center  flex-col gap-4 ">
        <h2 className='font-semibold mt-5 capitalize text-2xl'> Member Login   </h2>

      <div className="flex flex-col ">
       
        <input type="text"
         name="email" 
         placeholder= 'Email'
         className='outline-none placeholder:text-center rounded-md text-2xl h-12 bg-slate-700 p-1 pl-4 '
         onChange = {(e)=> e.target.value}
         />
      </div>

      <div className="flex justify-between relative items-center ">
        <input
         type= {eyes ? "password" : "text"}
         name="password"
         placeholder= 'Password'
         className='outline-none placeholder:text-center rounded-md text-2xl h-12 bg-slate-700 p-1 pl-4'
         onChange = {(e) => e.target.value}
         />
         {
          eyes ? ( <FaEyeSlash size = {18}  className='text-black cursor-pointer right-2 absolute ' onClick={toggle}/>  ) : (
            <FaEye className='text-black absolute right-2 pointer' onClick={toggle} size= {18} />
          )
         }
      </div>
      <button onClick={handleLogin} className='w-48 h-12 bg-blue-400 rounded-xl text-xl font-semibold hover:bg-blue-600 '> Login  </button>
      <div className="flex justify-center gap-2 items-center flex-col">
      <p className='font-mono leading-tight'> Create an account </p>
      <Link to = "/signUp">
        <FaArrowRight className='w-6 cursor-pointer rounded-full text-center p-1 h-6 hover:bg-blue-600 bg-blue-400'/>
        </Link> 

      </div>
      </div>

   
    </div>
  )
}

export default Login
