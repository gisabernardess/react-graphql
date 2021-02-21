import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Animation = styled.div`
  margin-bottom: 0.5rem;

  svg {
    animation: ${rotate360} 2s linear infinite;
    transform: translateZ(0);
  }
`;

export default Animation;
