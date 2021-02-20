import React from 'react';
import styled from 'styled-components';

interface PageErrorProps {
  message?: string;
}

export function PageError(props: PageErrorProps) {
  const { message } = props;

  return (
    <Container>
      {/* <ErrorFlag /> */}
      {message && <p>{message}</p>}
    </Container>
  );
}

PageError.defaultProps = {
  message: 'Oops, Something went wrong!',
} as PageErrorProps;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;
