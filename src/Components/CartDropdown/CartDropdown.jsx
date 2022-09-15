import React from 'react';
import CustomButton from '../CustomButton/CustomButton';

import './styles.scss';

export default function CartDropdown() {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      <CustomButton>go to checkout</CustomButton>
    </div>
  );
}
