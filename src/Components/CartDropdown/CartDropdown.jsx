import React, { useContext } from 'react';
import { CartContext } from '../../contexts/cartContext';

import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';

import { useNavigate } from 'react-router-dom';

import './styles.scss';

export default function CartDropdown() {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const handlegoToCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="cartDropdown">
      <div className="cartDropdown__Items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <p className="empty-message">Your cart is empty</p>
        )}
      </div>
      <Button handleClick={handlegoToCheckout}>go to checkout</Button>
    </div>
  );
}
