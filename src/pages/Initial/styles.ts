import styled, { keyframes } from 'styled-components';

const appearFromTop = keyframes`
from {
  opacity: 0;
  transform: translateY(50px);
}
to {
  opacity: 1;
  transform: translateY(0);
}
`;
export const AnimationContainerTop = styled.div`
  animation: ${appearFromTop} 1s;
`;
