import React, { useContext } from 'react';
import { CartContext } from '../../contexts/cartContext';
import { ReactComponent as CartIcon } from '../../assets/cart.svg';

import CartDropdown from '../CartDropdown/CartDropdown';

import './styles.scss';

export default function Cart() {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div onClick={toggleCart} className="cart">
      <CartIcon className="cartIcon" />
      <span className="cart__ItemCount">{cartCount}</span>
      {isCartOpen && <CartDropdown />}
    </div>
  );
}
