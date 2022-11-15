import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCartItems } from '../../store/cart/cartSelector';

import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';

import {
  CartItems,
  EmptyMessage,
  CartDropdownContainer,
} from './CartDropdownStyles';

export default function CartDropdown() {
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button handleClick={() => navigate('/checkout')}>go to checkout</Button>
    </CartDropdownContainer>
  );
}
