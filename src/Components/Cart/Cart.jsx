import { useSelector, useDispatch } from 'react-redux';
import { setIsCartOpen } from '../../store/cart/cartAction';
import {
  selectIsCartOpen,
  selectCartCount,
} from '../../store/cart/cartSelector';

import { ReactComponent as CartIcon } from '../../assets/cart.svg';
import CartDropdown from '../CartDropdown/CartDropdown';

import { CartContainer, ItemCount } from './CartStyles';

export default function Cart() {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <CartContainer onClick={() => dispatch(setIsCartOpen(!isCartOpen))}>
      <CartIcon />
      <ItemCount>{cartCount}</ItemCount>
      {isCartOpen && <CartDropdown />}
    </CartContainer>
  );
}
