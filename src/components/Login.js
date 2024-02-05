import React, { useState } from 'react';
import Header from './Header';


const Login = () => {

  const [isSignInForm,setIsSigninForm]=useState(true)
  const toggleSignInForm = ()=>{
    setIsSigninForm(!isSignInForm);
  }

  return (
    <div className='relative h-screen'>
      <Header />
      <div className="absolute inset-0 flex justify-center items-center bg-gray-900 bg-opacity-75">
        <img
          className='absolute inset-0 w-full h-full object-cover opacity-50'
          src='https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_medium.jpg'
          alt='backgroundImage'
        />
        <div className="z-10 text-white bg-gray-900 p-8 rounded-lg shadow-xl w-80 bg-opacity-80">
          <h2 className=" text-2xl font-bold mb-6">{isSignInForm?"Sign In":"Sign Up"}</h2>
          <form>
            {!isSignInForm&&<div className="mb-4">
              <input type="text" id="name" name="text" placeholder='Full Name' className="w-full px-3 py-2 rounded bg-gray-700 text-white focus:outline-none focus:bg-gray-600" />
            </div>}
            <div className="mb-4">
              <input type="email" id="email" name="email" placeholder='Email Address' className="w-full px-3 py-2 rounded bg-gray-700 text-white focus:outline-none focus:bg-gray-600" />
            </div>
            <div className="mb-6">
              <input type="password" id="password" name="password" placeholder='Password' className="w-full px-3 py-2 rounded bg-gray-700 text-white focus:outline-none focus:bg-gray-600" />
            </div>
            <button type="submit" className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-500 focus:outline-none">
              {isSignInForm?"Sign In":"Sign Up"}
            </button>
          </form>
          <p className='mt-8 font-light cursor-pointer hover:underline' onClick={toggleSignInForm}>
             {isSignInForm?"New to Netflix? Sign In":"already registred Sign Up Now."} Now
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;



