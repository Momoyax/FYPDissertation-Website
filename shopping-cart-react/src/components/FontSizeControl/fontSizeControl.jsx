import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const FontSizeControl = () => {
  const { fontSize, changeFontSize } = useContext(ShopContext);

  const increaseFontSize = () => {
    const newSize = parseFloat(fontSize) + 1 + "px";
    changeFontSize(newSize);
  };

  const decreaseFontSize = () => {
    const newSize = parseFloat(fontSize) - 1 + "px";
    changeFontSize(newSize);
  };

  return (
    <div>
      <button onClick={decreaseFontSize}>-</button>
      <span>Font Size: {fontSize}</span>
      <button onClick={increaseFontSize}>+</button>
    </div>
  );
};