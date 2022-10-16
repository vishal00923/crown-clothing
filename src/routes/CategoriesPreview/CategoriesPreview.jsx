import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/categoriesSelector';

import CategoryPreview from '../../components/CategoryPreview/CategoryPreview';

export default function CategoriesPreview() {
  const categoriesMap = useSelector(selectCategoriesMap);

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
