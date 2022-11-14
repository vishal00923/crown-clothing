import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../store/cart/cartAction';
import { selectCartItems } from '../../store/cart/cartSelector';

import Button from '../Button/Button';

import './ProductCardStyles.scss';

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const { imageUrl, name, price } = product;

  return (
    <div className='productCardContainer'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='productCardFooter'>
        <span className='productName'>{name}</span>
        <span className='productPrice'>${price}</span>
      </div>
      <Button
        handleClick={() => dispatch(addItemToCart(cartItems, product))}
        type='inverted'
      >
        add to cart
      </Button>
    </div>
  );
}
