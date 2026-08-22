import { createContext, useState } from "react";
import all_product from "../Data/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  return all_product.reduce((acc, product) => {
    acc[product.id] = 0;
    return acc;
  }, {});
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max((prev[itemId] || 0) - 1, 0),
    }));
  };

  const getTotalCartItems = () => {
    return Object.values(cartItems).reduce((total, qty) => total + qty, 0);
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item),
        );

        if (itemInfo) {
          totalAmount += itemInfo.new_price * cartItems[item];
        }
      }
    }

    return totalAmount;
  };

  const contextValue = {
    all_product,
    getTotalCartAmount,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartItems,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
