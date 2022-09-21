import React, { useContext } from 'react';
import { CartContext } from '../../contexts/cartContext';

import Button from '../Button/Button';
import './styles.scss';

export default function ProductCard({ product }) {
  const { imageUrl, name, price } = product;
  const { addItemToCart } = useContext(CartContext);

  const handleAddItemToCart = () => {
    addItemToCart(product);
  };

  return (
    <div className="product">
      <img src={imageUrl} alt={`${name}`} />
      <div className="productFooter">
        <span className="productName">{name}</span>
        <span className="productPrice">${price}</span>
      </div>
      <Button handleClick={handleAddItemToCart} type="inverted">
        add to cart
      </Button>
    </div>
  );
}
