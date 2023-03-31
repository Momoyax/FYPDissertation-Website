import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import cartAddSound from "../../assets/cart-add.mp3";
import useSound from "use-sound";
import "./button-contrast.css";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems, contrast } = useContext(ShopContext);
  const [playAdd] = useSound(cartAddSound);

  const cartItemCount = cartItems[id];

  return (
    <div className="product">
      <img src={productImage} alt={`Product image of ${productName}`} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> £{price}</p>
      </div>
      <button className={`addToCartBttn ${contrast}Contrast`} onClick={() => {addToCart(id); playAdd();}}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};
