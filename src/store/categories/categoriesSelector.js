import { createSelector } from 'reselect';

const selectCategoriesReducer = (state) => state.categories;

export const selectCategoriesMap = createSelector(
  [selectCategoriesReducer],
  (categories) => {
    const categoriesMap = categories.categories.reduce((acc, item) => {
      const { title, items } = item;
      acc[title.toLowerCase()] = items;

      return acc;
    }, {});

    return categoriesMap;
  }
);
