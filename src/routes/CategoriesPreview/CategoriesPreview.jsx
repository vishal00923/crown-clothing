import React, { useContext } from 'react';
import { CategoriesContext } from '../../contexts/categoriesContext';

import CategoryPreview from '../../components/CategoryPreview/CategoryPreview';

export default function CategoriesPreview() {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];

        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
}
