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

  @media screen and (max-width: 800px) {
    padding-top: 50px;
  }
`;
