import { useState } from 'react';
import GoogleButton from 'react-google-button';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase';

import Input from '../Input/Input';
import Button from '../Button/Button';

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
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      console.log('user sign in failed', error);
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
    <div className="signIn">
      <h2>I already have an account</h2>
      <p>Sign In with your email and password</p>
      <form onSubmit={handleSubmit}>
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
        <div className="signIn__ButtonContainer">
          <Button type="submit">sign in</Button>
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
