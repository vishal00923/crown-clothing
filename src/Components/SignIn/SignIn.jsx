import { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  googleSignInStart,
  emailSignInStart,
} from '../../store/user/userAction';

import Input from '../Input/Input';
import Button from '../Button/Button';
import GoogleButton from 'react-google-button';

import './styles.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

export default function SignIn() {
  const dispatch = useDispatch();

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  function resetFormFields() {
    setFormFields(defaultFormFields);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields();
    } catch (error) {
      console.log('user sign in failed', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const googleSignIn = () => {
    dispatch(googleSignInStart());
  };

  return (
    <div className='signIn'>
      <h2>I already have an account</h2>
      <p>Sign In with your email and password</p>
      <form onSubmit={handleSubmit}>
        <Input
          handleChange={handleChange}
          type='email'
          name='email'
          value={email}
          label='Email'
          required
        />
        <Input
          handleChange={handleChange}
          type='password'
          name='password'
          value={password}
          label='Password'
          required
        />
        <div className='signIn__ButtonContainer'>
          <Button type='submit'>sign in</Button>
          <GoogleButton
            onClick={googleSignIn}
            type='light'
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
