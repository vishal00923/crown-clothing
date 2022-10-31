import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { signUpStart } from '../../store/user/userAction';

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
  const dispatch = useDispatch();

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  function resetFormFields() {
    setFormFields(defaultFormFields);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Password and Confirm Password must be same.');
      return;
    }

    try {
      dispatch(signUpStart(email, password, displayName));
      resetFormFields();
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='signUp'>
      <h2>I do not have an account</h2>
      <p>Sign up with your email and password</p>

      <form onSubmit={handleSubmit}>
        <Input
          handleChange={handleChange}
          type='text'
          name='displayName'
          value={displayName}
          label='Display Name'
          required
        />
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
        <Input
          handleChange={handleChange}
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          label='Confirm Password'
          required
        />
        <Button type='submit'>sign up</Button>
      </form>
    </div>
  );
}
