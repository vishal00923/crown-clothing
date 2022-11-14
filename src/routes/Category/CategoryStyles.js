import styled from 'styled-components';

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 30px;
  row-gap: 50px;

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 25px;
  }

  @media (min-width: 820px) and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 35px;
  }
`;

export const Title = styled.h2`
  font-size: 2.125rem;
  margin-bottom: 25px;
  text-align: center;
`;
