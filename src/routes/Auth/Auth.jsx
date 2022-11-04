import React from 'react';

import SignIn from '../../Components/SignIn/SignIn';
import SignUp from '../../Components/SignUp/SignUp';

import './styles.scss';

export default function Auth() {
  return (
    <div className='auth'>
      <SignIn />
      <SignUp />
    </div>
  );
}
