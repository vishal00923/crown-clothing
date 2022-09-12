import React from 'react';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

import './styles.scss';

export default function SignInSignUpPage() {
  return (
    <div className="sign-in_sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
}
