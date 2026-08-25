import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

const CartItem = () => {
  const {
    getTotalCartAmount,
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartItems,
  } = useContext(ShopContext);

  if (getTotalCartItems() === 0) {
    return (
      <div className="px-4 py-16 text-center text-slate-600 sm:px-6 lg:px-16">
        Your cart is empty. Add some products to continue shopping.
      </div>
    );
  }

  const handleCheckout = async (itemId, price) => {
    console.log("CHECKOUT itemId:", itemId);
    console.log("CHECKOUT price:", price);
    try {
      const response = await fetch(
        "https://ecommerce-pasa.onrender.com/initialize-khalti",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            itemId: itemId,
            totalPrice: price,
            website_url: "http://localhost:5173",
          }),
        },
      );

      const data = await response.json();

      console.log("Khalti response:", data);
    } catch (error) {
      console.log("Checkout error:", error);
    }
  };

  return (
    <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-8">
      <div className="w-full overflow-x-auto">
        <div className="min-w-[850px] grid grid-cols-[100px_2fr_1fr_1fr_1fr_80px] items-center gap-5 border-b border-gray-300 pb-4 text-gray-700 font-semibold">
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

        {all_product.map((e) => {
          if (cartItems[e.id] > 0) {
            return (
              <div
                key={e.id}
                className="min-w-[850px] grid grid-cols-[100px_2fr_1fr_1fr_1fr_80px] items-center gap-5 border-b border-gray-300 py-5"
              >
                <div>
                  <img
                    src={e.image}
                    alt={e.name}
                    className="w-16 h-16 object-contain rounded"
                  />
                </div>

                <p className="text-gray-700 text-sm md:text-base pr-5">
                  {e.name}
                </p>

                <p className="font-medium">${e.new_price}</p>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => removeFromCart(e.id)}
                    className="h-9 w-9 rounded border border-gray-300 bg-white text-gray-700 transition hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="flex h-9 min-w-10 items-center justify-center border border-gray-300 px-2">
                    {cartItems[e.id]}
                  </span>
                  <button
                    onClick={() => addToCart(e.id)}
                    className="h-9 w-9 rounded border border-gray-300 bg-white text-gray-700 transition hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>

                <p className="font-medium">${e.new_price * cartItems[e.id]}</p>

                <button
                  onClick={() => removeFromCart(e.id)}
                  className="text-gray-500 hover:text-red-500 text-xl transition"
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
            );
          }

          return null;
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mt-20">
        <div className="w-full max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-medium mb-8">Cart Totals</h1>

          <div className="flex justify-between items-center py-4 border-b border-gray-300">
            <p className="text-gray-700">Subtotal</p>

            <p className="font-medium">${getTotalCartAmount()}</p>
          </div>
          <div className="flex justify-between items-center py-4 border-b border-gray-300">
            <p className="text-gray-700">Shipping Fee</p>

            <p className="font-medium">Free</p>
          </div>

          <div className="flex justify-between items-center py-4">
            <h3 className="text-lg font-semibold">Total</h3>

            <h3 className="text-lg font-semibold">${getTotalCartAmount()}</h3>
          </div>

          <button
            onClick={() => {
              const firstItem = all_product.find((e) => cartItems[e.id] > 0);

              if (firstItem) {
                console.log("FIRST ITEM:", firstItem);
                console.log("FIRST ITEM _id:", firstItem._id);
                console.log("FIRST ITEM id:", firstItem.id);
                console.log("FIRST ITEM PRICE:", firstItem.new_price);
                console.log("CART ITEMS:", cartItems);
                console.log("CART TOTAL:", getTotalCartAmount());

                handleCheckout(firstItem._id, firstItem.new_price);
              }
            }}
            className="mt-8 bg-red-500 hover:bg-red-600 text-white 
             px-8 py-4 text-sm font-semibold 
             transition duration-300"
          >
            PROCEED TO CHECKOUT
          </button>
        </div>

        <div className="w-full max-w-xl lg:pt-2">
          <p className="text-gray-500 mb-4">
            If you have a promo code, Enter it here
          </p>

          <div className="flex w-full">
            <input
              type="text"
              placeholder="promo code"
              className="flex-1 min-w-0 bg-gray-100 px-5 py-4 
                         outline-none text-sm"
            />

            <button
              onClick={handleCheckout}
              className="bg-black text-white px-8 sm:px-12 
                         hover:bg-gray-800 transition"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
