import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cartSelector';

import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';

import { useNavigate } from 'react-router-dom';

import './styles.scss';

export default function CartDropdown() {
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);

  const handlegoToCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className='cartDropdown'>
      <div className='cartDropdown__Items'>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <p className='empty-message'>Your cart is empty</p>
        )}
      </div>
      <Button handleClick={handlegoToCheckout}>go to checkout</Button>
    </div>
  );
}
