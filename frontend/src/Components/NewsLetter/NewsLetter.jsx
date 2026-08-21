import React from 'react'

const NewsLetter = () => {
  return (
   
    <div className="mt-35 mx-40 h-80 rounded-3xl shadow-lg bg-gradient-to-b from-blue-100 via-blue-50 to-white flex flex-col items-center gap-5 pt-12">

  <h1 className="text-4xl font-bold text-center">
    Get Exclusive Offers On Your Email
  </h1>

  <p className="text-xl text-gray-500">
    Subscribe to our newsletter and stay updated
  </p>

 
  <div className="mt-6 relative w-96">
    <input
      className="border border-gray-200 rounded-3xl p-4 pr-32 w-full focus:outline-none shadow-sm"
      type="email"
      placeholder="Your Email Id"
    />

    <button
      className="absolute right-1 top-1 bottom-1 px-7 rounded-3xl
      bg-blue-500 hover:bg-blue-700 transition
      text-white font-semibold shadow-md"
    >
      Subscribe
    </button>
  </div>

</div>
  )
}

export default NewsLetter



