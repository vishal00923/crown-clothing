import React, { useContext } from 'react';
import { CartContext } from '../../contexts/cartContext';

import './styles.scss';

export default function CheckoutItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem;
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);

  const handleRemoveItemFromCart = () => {
    removeItemFromCart(cartItem);
  };

  const handleAddItemToCart = () => {
    addItemToCart(cartItem);
  };

  const handleClearItemFromCart = () => {
    clearItemFromCart(cartItem);
  };

  return (
    <div className="checknoutItem">
      <div className="checkoutItem__ImgContainer">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="checkoutItem__Name">{name}</span>
      <span className="checkoutItem__Quantity">
        <div onClick={handleRemoveItemFromCart} className="checkoutItem__Arrow">
          &#10094;
        </div>
        <span className="checkoutItem__Value">{quantity}</span>
        <div onClick={handleAddItemToCart} className="checkoutItem__Arrow">
          &#10095;
        </div>
      </span>
      <span className="checkoutItem__Price">${price * quantity}</span>
      <div
        onClick={handleClearItemFromCart}
        className="checkoutItem__RemoveButton"
      >
        &#10006;
      </div>
    </div>
  );
}
