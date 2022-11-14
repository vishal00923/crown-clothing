import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Spinner from '../../Components/Spinner/Spinner';
import ProductCard from '../../Components/ProductCard/ProductCard';

import {
  selectIsLoading,
  selectCategoriesMap,
} from '../../store/category/categorySelector';

import { Title, CategoryContainer } from './CategoryStyles';

export default function Category() {
  const { category } = useParams();

  const isLoading = useSelector(selectIsLoading);
  const categoriesMap = useSelector(selectCategoriesMap);

  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <Title>{category.toUpperCase()}</Title>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryContainer>
      )}
    </>
  );
}
