import React, { useState, useContext } from 'react';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase';

import { UserContext } from '../../contexts/userContext';

import Input from '../Input/Input';
import Button from '../Button/Button';

import './styles.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export default function SignUp() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const { setCurrentUser } = useContext(UserContext);

  function resetFormFields() {
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Password and Confirm Password must be same.');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      setCurrentUser(user);

      await createUserDocumentFromAuth(user, { displayName });
      alert('sign up successful 🎉');
      resetFormFields();
    } catch (error) {
      console.alert(error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="signUp">
      <h2>I do not have an account</h2>
      <p>Sign up with your email and password</p>

      <form onSubmit={handleSubmit}>
        <Input
          handleChange={handleChange}
          type="text"
          name="displayName"
          value={displayName}
          label="Display Name"
          required
        />
        <Input
          handleChange={handleChange}
          type="email"
          name="email"
          value={email}
          label="Email"
          required
        />
        <Input
          handleChange={handleChange}
          type="password"
          name="password"
          value={password}
          label="Password"
          required
        />
        <Input
          handleChange={handleChange}
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          label="Confirm Password"
          required
        />
        <Button type="submit">sign up</Button>
      </form>
    </div>
  );
}
