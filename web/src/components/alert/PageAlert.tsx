import React from 'react';
import styled from 'styled-components';
import { Container } from '../Container';
import Alert from './Alert';

interface PageAlertProps {
  message?: string;
}

export function PageAlert(props: PageAlertProps) {
  const { message } = props;

  return (
    <Container>
      <Alert />
      {message && <p>{message}</p>}
    </Container>
  );
}

PageAlert.defaultProps = {
  message: 'Oops, Something went wrong!',
} as PageAlertProps;
