import React, { useContext } from 'react';
import { ReactComponent as CartIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cartContext';

import './styles.scss';

export default function Cart() {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div onClick={toggleIsCartOpen} className="cart-icon-container">
      <CartIcon className="cart-icon" />
      <span className="item-count">{0}</span>
    </div>
  );
}
