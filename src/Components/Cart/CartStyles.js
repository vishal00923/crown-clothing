import styled from 'styled-components';

export const CartContainer = styled.div`
  width: 45px;
  height: 45px;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 25px;
    height: 25px;
  }
`;

export const ItemCount = styled.span`
  position: absolute;
  bottom: 12px;
  font-size: 0.725rem;
  font-weight: bold;
`;
