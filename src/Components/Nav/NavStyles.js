import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled(Link)`
  width: 70px;
  height: 100%;

  padding: 25px;
  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
  }
`;

export const OptionContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const OptionLink = styled(Link)`
  cursor: pointer;
  padding: 10px 15px;
`;
