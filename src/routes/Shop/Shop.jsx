import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { getCategoriesAndDocuments } from '../../utils/firebase';
import { setCategories } from '../../store/categories/categoriesAction';

import Category from '../Category/Category';
import CategoriesPreview from '../CategoriesPreview/CategoriesPreview';

export default function Shop() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categories = await getCategoriesAndDocuments();
      dispatch(setCategories(categories));

      console.log(categories);
    };

    getCategoriesMap();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
}
