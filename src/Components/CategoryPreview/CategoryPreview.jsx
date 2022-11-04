import React from 'react';
import { useNavigate } from 'react-router-dom';

import ProductCard from '../ProductCard/ProductCard';

import './styles.scss';

export default function CategoryPreview({ title, products }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/shop/${title}`);
  };

  return (
    <div className='categoryPreview'>
      <h2>
        <span onClick={handleClick} className='categoryPreview__Title'>
          {title.toUpperCase()}
        </span>
      </h2>

      <div className='categoryPreview__Preview'>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}
