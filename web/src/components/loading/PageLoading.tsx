import React from 'react';
import { Container } from '../Container';
import { ImSpinner9 } from 'react-icons/im';
import Animation from '../Animation';

interface PageLoadingProps {
  message?: string;
}

export function PageLoading(props: PageLoadingProps) {
  const { message } = props;

  return (
    <Container>
      <Animation>
        <ImSpinner9 size="1.5rem" />
      </Animation>

      {message && <p>{message}</p>}
    </Container>
  );
}

PageLoading.defaultProps = {
  message: 'Loading...',
} as PageLoadingProps;
