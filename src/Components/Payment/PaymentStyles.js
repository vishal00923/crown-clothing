import styled from 'styled-components';

export const PaymentContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.form`
  height: 100px;
  min-width: 500px;

  span {
    display: inline-block;
    width: 100%;
  }

  button {
    width: 100%;
    margin-top: 30px;
  }

  @media screen and (max-width: 800px) {
    min-width: 0;
    max-width: 300px;
    height: auto;

    span {
      width: 320px;
    }
  }
`;
