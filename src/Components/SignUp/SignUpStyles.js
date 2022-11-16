import styled from 'styled-components';

export const SignUpContainer = styled.div`
  width: 420px;
  display: flex;
  flex-direction: column;

  h2 {
    margin: 10px 0;
  }

  button {
    margin: 0 auto;
  }

  @media screen and (max-width: 420px) {
    width: 220px;

    button {
      width: 100%;
    }

    p,
    h2 {
      text-align: center;
    }
  }

  @media screen and (max-width: 1024px) {
    p,
    h2 {
      text-align: center;
    }

    padding-top: 50px;
  }
`;
