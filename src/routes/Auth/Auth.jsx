import React from 'react';

import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

import './styles.scss';

export default function Auth() {
  return (
    <div className="auth">
      <SignIn />
      <SignUp />
    </div>
  );
}
