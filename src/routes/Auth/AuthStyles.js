import styled from 'styled-components';

export const AuthContainer = styled.div`
  max-width: 920px;
  margin: 30px auto;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;
