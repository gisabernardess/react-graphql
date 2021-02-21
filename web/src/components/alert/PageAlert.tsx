import React from 'react';
import { Container } from '../Container';
import { FiAlertTriangle } from 'react-icons/fi';

interface PageAlertProps {
  message?: string;
}

export function PageAlert(props: PageAlertProps) {
  const { message } = props;

  return (
    <Container>
      <FiAlertTriangle
        color="var(--color-alert)"
        size="2rem"
        style={{ marginBottom: '0.5rem' }}
      />
      {message && <p>{message}</p>}
    </Container>
  );
}

PageAlert.defaultProps = {
  message: 'Oops, Something went wrong!',
} as PageAlertProps;
