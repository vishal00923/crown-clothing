import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../store/cart/cartAction';
import { selectCartItems } from '../../store/cart/cartSelector';

import Button from '../Button/Button';
import './styles.scss';

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const { imageUrl, name, price } = product;

  const handleAddItemToCart = () => {
    dispatch(addItemToCart(cartItems, product));
  };

  return (
    <div className='product'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='productFooter'>
        <span className='productName'>{name}</span>
        <span className='productPrice'>${price}</span>
      </div>
      <Button handleClick={handleAddItemToCart} type='inverted'>
        add to cart
      </Button>
    </div>
  );
}
