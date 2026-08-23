import React, { useState } from 'react'

const LoginSignup = () => {

  const [state,setState]=useState('login');
  return (
    <div className="flex mt-10 mb-8 bg-fuchsia-200   p-10 flex-col justify-center items-center">
     <div className="bg-white p-10">
       <h1 className="text-4xl mb-8 text-center">{state} </h1>
      <div className="flex flex-col gap-4">
      {state==="SignUp"?<input type="text" placeholder="Enter your name" className="border-2 focus:outline-none decoration-none   p-4 border-gray-400 rounded-2xl" />:<></>}  

         <input type="email" placeholder="Enter your email" className="border-2 focus:outline-none p-4 border-gray-400 rounded-2xl" />

          <input type="password" placeholder="Enter your password" className="border-2 focus:outline-none p-4 border-gray-400 rounded-2xl" />
      </div>

      <button className="bg-blue-500 w-full  p-3 mb-4 text-white cursor-pointer mt-5">Continue</button>

      {state=== "SignUp"?<p>Already have an account?<span className="underline underline-offset-1 cursor-pointer hover:text-blue-800"  onClick={()=>{setState("login")}}>Login here</span></p>:<p>Create an account?<span className="underline underline-offset-1 cursor-pointer hover:text-blue-800"  onClick={()=>{setState("SignUp")}}>Click here </span></p>}
      

      <div className="flex gap-2 mt-3">
        <input type="checkbox"/>
      <p>By continuing...I agree to the terms of use & privacy policy.</p>
      </div>
     </div>


    </div>
  )
}

export default LoginSignup
