import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/ProductCard/ProductCard';

import { selectCategoriesMap } from '../../store/categories/categoriesSelector';

import './styles.scss';

export default function Category() {
  const { category } = useParams();

  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <h2 className="title">{category.toUpperCase()}</h2>
      <div className="categoryContainer">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
}
