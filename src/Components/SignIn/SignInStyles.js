import styled from 'styled-components';

export const SignInContainer = styled.div`
  width: 420px;
  display: flex;
  flex-direction: column;

  h2 {
    margin: 10px 0;
  }

  @media screen and (max-width: 420px) {
    width: 220px;
    p,
    h2 {
      text-align: center;
    }
  }

  @media (min-width: 450px) and (max-width: 1024px) {
    p,
    h2 {
      text-align: center;
    }

    padding-bottom: 32px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;

  button {
    margin: 0 auto;
    margin-bottom: 8px;
  }

  @media screen and (max-width: 420px) {
    flex-direction: column;

    button {
      width: 100%;
    }
  }
`;
