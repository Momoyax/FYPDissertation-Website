import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Gear, ShoppingCart, CircleHalf} from "phosphor-react";
import "./navbar.css";
import { FontSizeControl } from "./FontSizeControl/fontSizeControl";
import {ShopContext } from "../context/shop-context";

export const Navbar = ({ dyslexiaFriendlyText, setDyslexiaFriendlyText }) => {
  const {toggleContrast} = useContext(ShopContext);
  const [showAccessibilityMenu, setShowAccessibilityMenu] = useState(false);
  return (
  <div className="navbar">
  <div className="links">
    {/* Add the accessibility icon */}
    <div className="accessibilityIcon" onClick={() => setShowAccessibilityMenu(!showAccessibilityMenu)}>
      <Gear size={32} />
    </div>
    {/* Display the accessibility dropdown menu if showAccessibilityMenu is true */}
    {showAccessibilityMenu && (
      <div className="accessibilityMenu">
        <ul>
        <li onClick={() => setDyslexiaFriendlyText(!dyslexiaFriendlyText)}>Dyslexia Friendly Text</li>
          <li><FontSizeControl /></li>
          <li><CircleHalf size={24} /> Change Contrast
            <button onClick={toggleContrast}>Toggle</button>
            </li>
        </ul>
      </div>
    )}
    <Link to="/"> Shop </Link>
    <Link to="/account"> Account </Link>
    <Link to="/login" activeClassName="active">
      Login
    </Link>
    <Link to="/register" activeClassName="active">
      Register
    </Link>
    <Link to="/cart">
      <ShoppingCart size={32} />
    </Link>
  </div>
</div>
  );
};
