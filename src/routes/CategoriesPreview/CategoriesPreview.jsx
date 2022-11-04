import { useSelector } from 'react-redux';
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from '../../store/categories/categoriesSelector';

import Spinner from '../../Components/Spinner/Spinner';
import CategoryPreview from '../../Components/CategoryPreview/CategoryPreview';

export default function CategoriesPreview() {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];

          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </>
  );
}
