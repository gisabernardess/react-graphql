import styled from 'styled-components';

export const Container = styled.div`
  max-height: 85%;
  padding: 0 0.2rem 1rem 0;

  overflow-y: auto;
  overflow-x: none;

  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: #6b9080;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #85b3a0;
  }
  ::-webkit-scrollbar-track {
    background: #ffffff;
    border-radius: 10px;
    box-shadow: inset 7px 10px 12px #f0f0f0;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr repeat(3, 1fr) 0.5fr;
  grid-gap: 5px 0;
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.5rem 1rem;
  border: 1px solid black;

  &:nth-of-type(5n - 4) {
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    border-right: none;
  }

  &:nth-of-type(5n - 3),
  &:nth-of-type(5n - 2),
  &:nth-of-type(5n - 1) {
    border-left: none;
    border-right: none;
  }

  &:nth-of-type(5n) {
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
    border-left: none;
  }
`;
