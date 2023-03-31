import { createContext, useEffect, useState } from "react";
import { PRODUCTS } from "../products";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext(null);


const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [fontSize, setFontSize] = useState("16px");

  const changeFontSize = (newSize) => {
    setFontSize(newSize);
  };

  const [contrast, setContrast] = useState("low");

  const toggleContrast = () => {
    setContrast((prevContrast) => (prevContrast === "low" ? "high" : "low"));
  };

  const [cartItems, setCartItems] = useState(getDefaultCart());

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [token, setToken] = useState(null);

  const navigate = useNavigate();

  const login = () => {
    setIsLoggedIn(true);
    setToken(null);
    navigate("/account");
  };

  const logout = () => {
    setIsLoggedIn(false);
    navigate("/login");
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = () => {
    setCartItems(getDefaultCart());
  };

  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
    toggleContrast,
    contrast,
    fontSize,
    changeFontSize,
    login,
    logout,
    isLoggedIn: token !== null,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
