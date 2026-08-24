import React from 'react'
import exclusive from "../../assets/for.jpg"

const Offers = () => {
  return (
    <div className="flex m-20 items-center justify-between mt-20 px-16 h-[80vh] bg-gradient-to-r from-pink-200 via-white to-white rounded-2xl shadow-lg">
      
      
      <div className="flex flex-col gap-6 max-w-lg">
        <h1 className="text-7xl font-extrabold text-gray-800 leading-tight">
          Exclusive
        </h1>
        <h2 className="text-5xl font-semibold text-gray-700">
          Offers for You
        </h2>
        <p className="text-2xl text-gray-600">
          ONLY ON BEST SELLERS PRODUCTS
        </p>
        <button className="bg-red-600 hover:bg-red-700 transition rounded-4xl px-2 py-4 text-white text-xl font-medium shadow-md">
          Check Now
        </button>
      </div>

    
      <div className="flex-shrink-0 w-[40%]">
        <img
          src={exclusive}
          alt="Exclusive Offer"
          className="w-full h-[70vh] object-contain"
        />
      </div>
    </div>
  )
}

export default Offers
