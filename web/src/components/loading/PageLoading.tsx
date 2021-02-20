import React from 'react';
import { Container } from '../Container';
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
