import React from 'react';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

import './styles.scss';

export default function Authentication() {
  return (
    <div className="authentication">
      <SignIn />
      <SignUp />
    </div>
  );
}
