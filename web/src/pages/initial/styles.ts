import styled from 'styled-components';

export const Main = styled.main`
  height: 90vh;
`;

export const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 1vh;
  background-color: #6b9080;
  color: #fff;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 9vh;
  background-color: #f5f5f5;

  a {
    svg {
      margin: 0.25rem;
    }
  }
`;
