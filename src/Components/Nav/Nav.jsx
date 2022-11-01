import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import { useDispatch } from 'react-redux';
import { signOutStart } from '../../store/user/userAction';

import { selectCurrentUser } from '../../store/user/userSelector';

import Cart from '../Cart/Cart';

import './styles.scss';

export default function Nav() {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  const signOutHandler = () => dispatch(signOutStart());

  return (
    <div className='nav'>
      <Link className='navLogo' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='navOptions'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/contact'>
          CONTACT
        </Link>
        {currentUser ? (
          <span
            onClick={signOutHandler}
            className='option'
            style={{ cursor: 'pointer' }}
          >
            SIGN OUT
          </span>
        ) : (
          <Link className='option' to='/auth'>
            SIGN IN
          </Link>
        )}
        <Cart />
      </div>
    </div>
  );
}
