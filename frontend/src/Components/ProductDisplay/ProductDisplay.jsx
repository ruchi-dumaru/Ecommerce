import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 px-4 sm:px-6 lg:px-10 py-6 lg:py-10">
  
      <div className="flex flex-col sm:flex-row  w-full lg:w-1/2">
      
        <div className="flex flex-row sm:flex-col gap-1 sm:gap-2 w-full sm:w-24 lg:w-28 order-2 sm:order-1">
          <img
            className="w-20 h-24 sm:w-24 sm:h-28 cursor-pointer rounded-md border border-slate-100"
            src={product.image}
            alt={product.name}
          />

          <img
            className="w-20 h-24 sm:w-24 sm:h-28 cursor-pointer rounded-md border border-slate-100"
            src={product.image}
            alt={product.name}
          />

          <img
            className="w-20 h-24 sm:w-24 sm:h-28 cursor-pointer rounded-md border border-slate-100"
            src={product.image}
            alt={product.name}
          />

          <img
            className="w-20 h-24 sm:w-24 sm:h-28 cursor-pointer rounded-md border border-slate-100"
            src={product.image}
            alt={product.name}
          />
        </div>

        <div className="flex-1 flex justify-center items-center order-1 sm:order-2">
          <img
            src={product.image}
            alt={product.name}
            className="h-[400px] w-full max-w-[500px] rounded-2xl object-cover shadow-lg sm:h-[500px] lg:h-[550px]"
          />
        </div>
      </div>

      
      <div className="w-full lg:w-1/2 flex flex-col gap-4 lg:gap-5">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
          {product.name}
        </h1>

      
        <div className="flex items-center gap-1 text-yellow-500">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-regular fa-star"></i>
        </div>

        
        <div className="flex items-center gap-4">
          <span className="text-gray-400 line-through text-base sm:text-lg">
            ${product.old_price}
          </span>

          <span className="text-xl sm:text-2xl font-semibold">
            ${product.new_price}
          </span>
        </div>

       
        <p className="text-gray-600 text-sm sm:text-base leading-6 sm:leading-7 max-w-xl">
          Designed for comfort and everyday style, this versatile piece features
          quality fabric, a modern fit, and a timeless design. Perfect for
          casual outings and easy to pair with your favorite wardrobe
          essentials.
        </p>

     
        <div>
          <h3 className="font-semibold mb-3">Select Size</h3>

          <div className="flex gap-2 sm:gap-3">
            <button className="border-2 border-gray-500 px-4 sm:px-5 py-2 hover:border-black">
              S
            </button>

            <button className="border-2 border-gray-500 px-4 sm:px-5 py-2 hover:border-black">
              M
            </button>

            <button className="border-2 border-gray-500 px-4 sm:px-5 py-2 hover:border-black">
              L
            </button>

            <button className="border-2  border-gray-500 px-4 sm:px-5 py-2 hover:border-black">
              XL
            </button>
          </div>
        </div>

      
        <button
          onClick={() => addToCart(product.id)}
          className="w-fit rounded-lg bg-black px-8 py-3 text-white transition hover:scale-[1.02] hover:bg-gray-800"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductDisplay;
