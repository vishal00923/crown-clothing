import { useSelector } from 'react-redux';
import {
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cartSelector';

import Payment from '../../Components/Payment/Payment';
import CheckoutItem from '../../Components/CheckoutItem/CheckoutItem';

import {
  CartTotal,
  CheckoutHeader,
  CheckoutContainer,
  CheckoutHeaderBlock,
} from './CheckoutStyles';

export default function Checkout() {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <CheckoutHeaderBlock>
          <span>Product</span>
        </CheckoutHeaderBlock>
        <CheckoutHeaderBlock>
          <span>Description</span>
        </CheckoutHeaderBlock>
        <CheckoutHeaderBlock>
          <span>Quantity</span>
        </CheckoutHeaderBlock>
        <CheckoutHeaderBlock>
          <span>Price</span>
        </CheckoutHeaderBlock>
        <CheckoutHeaderBlock>
          <span>Remove</span>
        </CheckoutHeaderBlock>
      </CheckoutHeader>

      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <CartTotal>Total : ${cartTotal}</CartTotal>
      <Payment />
    </CheckoutContainer>
  );
}
