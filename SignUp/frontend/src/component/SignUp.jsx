import React, { useState } from 'react';
import { FaArrowRight, FaEyeSlash, FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';

function SignUp() {
  const [isPassword, setIsPassword] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const dataHandle = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const toggle = () => {
    setIsPassword(!isPassword);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className='flex items-center h-screen justify-center'>
      <div className="bg-white h-96 rounded-full flex items-center shadow-xl w-96 justify-center flex-col gap-4">
        <h2 className='font-semibold mt-5 capitalize text-2xl'>Member Sign-Up</h2>

        <div className="flex flex-col">
          <input type="text"
            name="name"
            id="1"
            placeholder='Full-Name'
            className='outline-none placeholder:text-center rounded-md text-lg w-72 h-6 bg-slate-700 p-1 pl-4'
            onChange={dataHandle}
          />
        </div>
        <div className="flex flex-col">
          <input type="text"
            name="email"
            id="2"
            placeholder='Email'
            className='outline-none placeholder:text-center rounded-md text-lg w-72 h-6 bg-slate-700 p-1 pl-4'
            onChange={dataHandle}
          />
        </div>
        <div className="flex flex-col relative justify-center items-center">
          <input type={isPassword ? "password" : "text"}
            name="password"
            id="3"
            placeholder='Password'
            className='outline-none placeholder:text-center rounded-md text-lg w-72 h-6 bg-slate-700 p-1 pl-4'
            onChange={dataHandle}
          />
          {
            isPassword ? (
              <FaEyeSlash size={18} className='text-black cursor-pointer right-2 absolute' onClick={toggle} />
            ) : (
              <FaEye className='text-black absolute right-2 pointer' onClick={toggle} size={18} />
            )
          }
        </div>
        <div className="flex flex-col relative justify-center items-center">
          <input type={isPassword ? "password" : "text"}
            name="confirmPassword"
            id="4"
            placeholder='Confirm password'
            className='outline-none placeholder:text-center rounded-md text-lg w-72 h-6 bg-slate-700 p-1 pl-4'
            onChange={dataHandle}
          />
          {
            isPassword ? (
              <FaEyeSlash size={18} className='text-black cursor-pointer right-2 absolute' onClick={toggle} />
            ) : (
              <FaEye className='text-black absolute right-2 pointer' onClick={toggle} size={18} />
            )
          }
        </div>

        <button onClick={handleSignUp} className='w-48 h-12 bg-blue-400 rounded-xl text-xl font-semibold hover:bg-blue-600'>
          Sign-up
        </button>

        <div className="flex justify-center gap-2 items-center flex-col">
          <p className='font-mono leading-tight'>Already have an account?</p>
          <Link to="/">
            <FaArrowRight className='w-6 cursor-pointer rounded-full text-center p-1 h-6 hover:bg-blue-600 bg-blue-400' />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
