import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  height: 100%;
  margin: auto;
`;

export const Grid = styled.div`
  padding: 2.5rem 0.2rem 0.2rem 0;
  width: 100%;

  display: grid;
  grid-template-columns: 2fr repeat(3, 1fr) 0.5fr;
  grid-gap: 5px 0px;
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.5rem 1rem;
  font-weight: bold;

  span {
    font-size: 1.25rem;
    color: #333333;
  }
`;
