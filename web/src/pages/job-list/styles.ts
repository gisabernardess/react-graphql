import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  max-height: 90%;
  padding: 0 0.2rem 1rem 0;

  overflow-y: auto;
  overflow-x: none;

  ::-webkit-scrollbar {
    width: 0.3rem;
    height: 0.3rem;
  }
  ::-webkit-scrollbar-thumb {
    background: var(--color-primary);
    border-radius: 0.625rem;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${lighten(0.2, '#6B9080')};
  }
  ::-webkit-scrollbar-track {
    background: #fff;
    border-radius: 0.625rem;
    box-shadow: inset 0.4rem 0.625rem 0.75rem var(--color-surface);
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr repeat(3, 1fr) 0.5fr;
  grid-gap: 0.3rem 0;
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.5rem 1rem;
  border: 1px solid var(--color-divider);

  &:nth-of-type(5n - 4) {
    justify-content: flex-start;
    border-bottom-left-radius: 0.625rem;
    border-top-left-radius: 0.625rem;
    border-right: none;
  }

  &:nth-of-type(5n - 3),
  &:nth-of-type(5n - 2),
  &:nth-of-type(5n - 1) {
    border-left: none;
    border-right: none;
  }

  &:nth-of-type(5n) {
    border-bottom-right-radius: 0.625rem;
    border-top-right-radius: 0.625rem;
    border-left: none;
  }
`;
