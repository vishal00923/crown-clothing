import styled from 'styled-components';

export const SignInContainer = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;

  h2 {
    margin: 10px 0;
  }

  @media screen and (max-width) {
    padding-bottom: 30px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
`;
