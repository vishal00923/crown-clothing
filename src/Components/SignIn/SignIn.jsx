import React, { useState } from 'react';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import GoogleButton from 'react-google-button';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase';

import './styles.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

export default function SignIn() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  function resetFormFields() {
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
      resetFormFields();
    } catch (error) {
      alert(error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const googleSignIn = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <p>Sign In with your email and password</p>
      <form onSubmit={handleSubmit}>
        <FormInput
          handleChange={handleChange}
          type="email"
          name="email"
          value={email}
          label="Email"
          required
        />
        <FormInput
          handleChange={handleChange}
          type="password"
          name="password"
          value={password}
          label="Password"
          required
        />
        <div className="sign-in_buttonContainer">
          <CustomButton type="submit">sign in</CustomButton>
          <GoogleButton
            onClick={googleSignIn}
            type="light"
            style={{
              minWidth: '152px',
              height: '50px',
              border: 'none',
              outline: 'none',
              fontFamily: 'Open Sans Condensed',
              fontWeight: 'bold',
              fontSize: '1.1rem',
            }}
          />
        </div>
      </form>
    </div>
  );
}
