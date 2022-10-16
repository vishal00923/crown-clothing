import { CART_ACTION_TYPES } from './cartTypes';

export const setIsCartOpen = (boolean) => ({
  type: CART_ACTION_TYPES.SET_IS_CART_OPEN,
  payload: boolean,
});

export const setCartItems = (cartItems) => ({
  type: CART_ACTION_TYPES.SET_CART_ITEMS,
  payload: cartItems,
});

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, productToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== productToClear.id);

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return {
    type: CART_ACTION_TYPES.SET_CART_ITEMS,
    payload: newCartItems,
  };
};

export const removeItemFromCart = (cartItems, productToRemove) => {
  const newCartItems = removeCartItem(cartItems, productToRemove);
  return {
    type: CART_ACTION_TYPES.SET_CART_ITEMS,
    payload: newCartItems,
  };
};

export const clearItemFromCart = (cartItems, productToClear) => {
  const newCartItems = clearCartItem(cartItems, productToClear);
  return {
    type: CART_ACTION_TYPES.SET_CART_ITEMS,
    payload: newCartItems,
  };
};
