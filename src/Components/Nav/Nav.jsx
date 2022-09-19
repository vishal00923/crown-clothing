import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import { UserContext } from '../../contexts/userContext';
import { signOutUser } from '../../utils/firebase';

import Cart from '../Cart/Cart';

import './styles.scss';

export default function Nav() {
  const { currentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <div className="nav">
      <Link className="navLogo" to="/">
        <Logo className="logo" />
      </Link>
      <div className="navOptions">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <span
            onClick={signOutHandler}
            className="option"
            style={{ cursor: 'pointer' }}
          >
            SIGN OUT
          </span>
        ) : (
          <Link className="option" to="/auth">
            SIGN IN
          </Link>
        )}
        <Cart />
      </div>
    </div>
  );
}
