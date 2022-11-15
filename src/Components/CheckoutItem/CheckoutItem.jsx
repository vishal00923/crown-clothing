import { useDispatch, useSelector } from 'react-redux';
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from '../../store/cart/cartAction';
import { selectCartItems } from '../../store/cart/cartSelector';

import {
  Value,
  Arrow,
  BaseSpan,
  Quantity,
  RemoveButton,
  ImageContainer,
  CheckoutItemContainer,
} from './CheckoutItemStyles';

export default function CheckoutItem({ cartItem }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow
          onClick={() => dispatch(removeItemFromCart(cartItems, cartItem))}
        >
          &#10094;
        </Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={() => dispatch(addItemToCart(cartItems, cartItem))}>
          &#10095;
        </Arrow>
      </Quantity>
      <BaseSpan>${price * quantity}</BaseSpan>
      <RemoveButton
        onClick={() => dispatch(clearItemFromCart(cartItems, cartItem))}
      >
        &#10006;
      </RemoveButton>
    </CheckoutItemContainer>
  );
}
