import { combineReducers } from 'redux';

import { userReducer } from './user/userReducer';
import { cartReducer } from './cart/cartReducer';
import { categoriesReducer } from './category/categoryReducertjs';

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});
