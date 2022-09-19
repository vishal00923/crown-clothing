import React, { useContext } from 'react';
import { ProductsContext } from '../../contexts/productsContext';

import ProductCard from '../../components/ProductCard/ProductCard';

import './styles.scss';

export default function Shop() {
  const { products } = useContext(ProductsContext);

  return (
    <div className="productsContainer">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
