import React, { useState } from 'react';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import './styles.scss';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
    setPassword('');
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign In with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          handleChange={handleEmail}
          type="email"
          name="email"
          value={email}
          label="Email"
          required
        />
        <FormInput
          handleChange={handlePassword}
          type="password"
          name="password"
          value={password}
          label="Password"
          required
        />
        <CustomButton type="submit">Sign In</CustomButton>
      </form>
    </div>
  );
}
