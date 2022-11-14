import { useSelector } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import { useDispatch } from 'react-redux';
import { signOutStart } from '../../store/user/userAction';

import { selectCurrentUser } from '../../store/user/userSelector';

import Cart from '../Cart/Cart';

import {
  OptionLink,
  NavContainer,
  LogoContainer,
  OptionContainer,
} from './NavStyles';

export default function Nav() {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  return (
    <NavContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>

      <OptionContainer>
        <OptionLink to='/shop'>SHOP</OptionLink>
        <OptionLink to='/contact'>CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink
            as='div'
            onClick={() => dispatch(signOutStart())}
            style={{ cursor: 'pointer' }}
          >
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink className='option' to='/auth'>
            SIGN IN
          </OptionLink>
        )}
        <Cart />
      </OptionContainer>
    </NavContainer>
  );
}
