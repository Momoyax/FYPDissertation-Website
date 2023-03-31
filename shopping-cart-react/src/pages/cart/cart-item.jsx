import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import useSound from "use-sound";
import cartAddSound from "../../assets/cart-add.mp3";
import cartRemoveSound from "../../assets/cart-remove.mp3";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
  const [playAdd] = useSound(cartAddSound);
  const [playRemove] = useSound(cartRemoveSound);

  return (
    <div className="cartItem">
      <img src={productImage} alt={`Product image of ${productName}`} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: £{price}</p>
        <div className="countHandler">
          <button onClick={() => { removeFromCart(id); playRemove(); }}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => { addToCart(id); playAdd(); }}> + </button>
        </div>
      </div>
    </div>
  );
};
