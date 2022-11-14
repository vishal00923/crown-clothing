import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 500px) {
    height: 90vh;
    justify-content: center;
  }

  @media (min-width: 512px) and (max-width: 800px) {
    height: 75vh;
    justify-content: center;
  }
`;
