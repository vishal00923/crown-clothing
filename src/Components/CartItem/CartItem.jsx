import React from 'react';

import './styles.scss';

export default function CartItem({ cartItem }) {
  const { imageUrl, name, price, quantity } = cartItem;

  return (
    <div className="cartItem">
      <img src={imageUrl} alt={`${name}`} />
      <div className="cartItem__Details">
        <span className="cartItem__Name">{name}</span>
        <span className="cartItem__Price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
}
