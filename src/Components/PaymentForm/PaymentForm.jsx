import { useState } from 'react';
import { useSelector } from 'react-redux';

import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import { selectCartTotal } from '../../store/cart/cartSelector';
import { selectCurrentUser } from '../../store/user/userSelector';

import Button from '../Button/Button';
import './styles.scss';

export default function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();

  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);

  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setIsProcessingPayment(true);

    const response = await fetch('/.netlify/functions/createPaymentIntent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json());

    const clientSecret = response.paymentIntent.client_secret;

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : 'Guest',
        },
      },
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert('Payment Successful');
      }
    }
  };

  return (
    <div className='paymentFormContainer'>
      <form onSubmit={handlePayment} className='formContainer'>
        <h2 style={{ marginBottom: '20px' }}>Credit Card Payment: </h2>
        <CardElement />
        <Button
          styles={{ marginLeft: 'auto', marginTop: '30px' }}
          isLoading={isProcessingPayment}
          type='inverted'
        >
          pay now
        </Button>
      </form>
    </div>
  );
}
