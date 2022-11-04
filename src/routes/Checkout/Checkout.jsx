import { useSelector } from 'react-redux';
import {
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cartSelector';

import PaymentForm from '../../Components/PaymentForm/PaymentForm';
import CheckoutItem from '../../Components/CheckoutItem/CheckoutItem';

import './styles.scss';

export default function Checkout() {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <div className='checkout'>
      <div className='checkoutHeader'>
        <div className='checkoutHeader__Block'>
          <span>Product</span>
        </div>
        <div className='checkoutHeader__Block'>
          <span>Description</span>
        </div>
        <div className='checkoutHeader__Block'>
          <span>Quantity</span>
        </div>
        <div className='checkoutHeader__Block'>
          <span>Price</span>
        </div>
        <div className='checkoutHeader__Block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className='chekoutTotal'>Total : ${cartTotal}</span>

      <PaymentForm />
    </div>
  );
}
