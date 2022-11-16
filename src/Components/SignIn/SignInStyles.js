import styled from 'styled-components';

export const SignInContainer = styled.div`
  width: 420px;
  display: flex;
  flex-direction: column;

  h2 {
    margin: 10px 0;
  }

  @media screen and (max-width: 1024px) {
    padding-bottom: 32px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;

  button {
    margin: 0 auto;
  }
`;
