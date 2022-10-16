import { CATEGORIES_ACTION_TYPES } from './categoriesTypes';

export const setCategories = (categories) => ({
  type: CATEGORIES_ACTION_TYPES.SET_CATEGORIES,
  payload: categories,
});
