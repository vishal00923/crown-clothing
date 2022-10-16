import { useSelector, useDispatch } from 'react-redux';
import { setIsCartOpen } from '../../store/cart/cartAction';
import {
  selectIsCartOpen,
  selectCartCount,
} from '../../store/cart/cartSelector';

import { ReactComponent as CartIcon } from '../../assets/cart.svg';
import CartDropdown from '../CartDropdown/CartDropdown';

import './styles.scss';

export default function Cart() {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const toggleCart = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  };

  return (
    <div onClick={toggleCart} className="cart">
      <CartIcon className="cartIcon" />
      <span className="cart__ItemCount">{cartCount}</span>
      {isCartOpen && <CartDropdown />}
    </div>
  );
}
