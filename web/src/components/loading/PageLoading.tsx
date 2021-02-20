import React from 'react';
import styled from 'styled-components';
import Spinner from './Spinner';

interface PageLoadingProps {
  message?: string;
}

export function PageLoading(props: PageLoadingProps) {
  const { message } = props;

  return (
    <Container>
      <Spinner />
      {message && <p>{message}</p>}
    </Container>
  );
}

PageLoading.defaultProps = {
  message: 'Loading...',
} as PageLoadingProps;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;
