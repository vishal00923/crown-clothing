import React, { useContext } from 'react';
import { CartContext } from '../../contexts/cartContext';

import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';

import './styles.scss';

export default function Checkout() {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="checkout">
      <div className="checkoutHeader">
        <div className="checkoutHeader__Block">
          <span>Product</span>
        </div>
        <div className="checkoutHeader__Block">
          <span>Description</span>
        </div>
        <div className="checkoutHeader__Block">
          <span>Quantity</span>
        </div>
        <div className="checkoutHeader__Block">
          <span>Price</span>
        </div>
        <div className="checkoutHeader__Block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className="chekoutTotal">Total : ${cartTotal}</span>
    </div>
  );
}
