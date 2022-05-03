import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../Assets/crown.svg';

import './styles.scss';

const Header = () => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        <Link className="option" to="/sign-in">
          SIGN IN
        </Link>
      </div>
    </div>
  );
};

export default Header;
