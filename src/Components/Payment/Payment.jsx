import { useState } from 'react';

import { CardElement } from '@stripe/react-stripe-js';
import { useStripe, useElements } from '@stripe/react-stripe-js';

import { useSelector } from 'react-redux';
import { selectCartTotal } from '../../store/cart/cartSelector';
import { selectCurrentUser } from '../../store/user/userSelector';

import { toast } from 'react-toastify';
import { FormContainer, PaymentContainer } from './PaymentStyles';

import Button from '../Button/Button';

export default function Payment() {
  const stripe = useStripe();
  const elements = useElements();
  const [processingPayment, setProcessingPayment] = useState(false);

  const totalAmount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setProcessingPayment(true);

    const response = await fetch('/.netlify/functions/createPaymentIntent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: totalAmount * 100 }),
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

    setProcessingPayment(false);

    if (paymentResult.error) {
      toast.error(`${paymentResult.error.message}`);
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        toast.success('Payment Successful 🎉');
      }
    }
  };

  return (
    <PaymentContainer>
      <FormContainer onSubmit={handlePayment}>
        <h2>Credit Card Payment: </h2>
        <span>
          <CardElement />
        </span>
        <Button
          type='submit'
          buttonType='inverted'
          isLoading={processingPayment}
        >
          pay now
        </Button>
      </FormContainer>
    </PaymentContainer>
  );
}
