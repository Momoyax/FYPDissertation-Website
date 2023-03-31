import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Account } from "./pages/account";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider, ShopContext } from "./context/shop-context";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
//import {PrivateRoute} from "./components/PrivateRoute";


function App() {
  const [dyslexiaFriendlyText, setDyslexiaFriendlyText] = useState(false);
  return (
    <div className={`App ${dyslexiaFriendlyText ? "dyslexia-friendly" : ""}`}>
      
        <Router>
        <ShopContextProvider>
          <Navbar 
          dyslexiaFriendlyText={dyslexiaFriendlyText}
          setDyslexiaFriendlyText={setDyslexiaFriendlyText}
          />
          <ShopContext.Consumer>
            {(context) => (
              <div style={{ fontSize: context.fontSize }}>
              <Routes>
                <Route path="/" element={<Shop />} />
                <Route path="/account" element={<Account />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register/>} />
              </Routes>
            </div>
          )}
          </ShopContext.Consumer>
          </ShopContextProvider>
        </Router>

    </div>
  );
}

export default App;
