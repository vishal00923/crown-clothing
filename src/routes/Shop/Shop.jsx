import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Category from '../Category/Category';
import CategoriesPreview from '../CategoriesPreview/CategoriesPreview';

export default function Shop() {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
}
