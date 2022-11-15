import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../store/cart/cartAction';
import { selectCartItems } from '../../store/cart/cartSelector';

import Button from '../Button/Button';

import { Name, Price, Footer, ProductCartContainer } from './ProductCardStyles';

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const { imageUrl, name, price } = product;

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </Footer>
      <Button
        onClick={() => dispatch(addItemToCart(cartItems, product))}
        buttonType='inverted'
      >
        add to cart
      </Button>
    </ProductCartContainer>
  );
}
