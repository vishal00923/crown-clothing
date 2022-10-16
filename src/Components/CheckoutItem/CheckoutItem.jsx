import { useDispatch, useSelector } from 'react-redux';
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from '../../store/cart/cartAction';
import { selectCartItems } from '../../store/cart/cartSelector';

import './styles.scss';

export default function CheckoutItem({ cartItem }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const { name, imageUrl, price, quantity } = cartItem;

  const handleRemoveItemFromCart = () => {
    dispatch(removeItemFromCart(cartItems, cartItem));
  };

  const handleAddItemToCart = () => {
    dispatch(addItemToCart(cartItems, cartItem));
  };

  const handleClearItemFromCart = () => {
    dispatch(clearItemFromCart(cartItems, cartItem));
  };

  return (
    <div className="checknoutItem">
      <div className="checkoutItem__ImgContainer">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="checkoutItem__Name">{name}</span>
      <span className="checkoutItem__Quantity">
        <div onClick={handleRemoveItemFromCart} className="checkoutItem__Arrow">
          &#10094;
        </div>
        <span className="checkoutItem__Value">{quantity}</span>
        <div onClick={handleAddItemToCart} className="checkoutItem__Arrow">
          &#10095;
        </div>
      </span>
      <span className="checkoutItem__Price">${price * quantity}</span>
      <div
        onClick={handleClearItemFromCart}
        className="checkoutItem__RemoveButton"
      >
        &#10006;
      </div>
    </div>
  );
}
