import styled from 'styled-components';

export const CartDropdownContainer = styled.div`
  position: absolute;
  top: 60px;
  right: 40px;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #000;
  background-color: #fff;
  z-index: 10;

  button {
    margin-top: auto;
  }
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const EmptyMessage = styled.span`
  margin: 50px auto;
  font-size: 1.375rem;
`;
