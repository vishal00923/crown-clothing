import { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  googleSignInStart,
  emailSignInStart,
} from '../../store/user/userAction';

import Input from '../Input/Input';
import Button, { BUTTON_TYPE_CLASSES } from '../Button/Button';

import { SignInContainer, ButtonsContainer } from './SignInStyles';

const defaultFormFields = {
  email: '',
  password: '',
};

export default function SignIn() {
  const dispatch = useDispatch();

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => setFormFields(defaultFormFields);

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

  return (
    <SignInContainer>
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
        <ButtonsContainer>
          <Button style={{ marginRight: '20px' }} type='submit'>
            sign in
          </Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={() => dispatch(googleSignInStart())}
          >
            sign in with google
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
}
