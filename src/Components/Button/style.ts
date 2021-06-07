import styled from 'styled-components';
import { shade } from 'polished';

export const ContentButton = styled.div`
  .MuiButton-root {
    font-weight: 500;
    width: 6.87em;
    height: 1.5em;
    border-radius: 0.6em;
    color: #e7ffff;
    text-transform: none;
    font-size: 1em;
    transition: background-color 0.2s, color 0.2s;
    &:hover {
      background-color: ${shade(0.2, '#04799c')};
      color: ${shade(0.2, '#E7FFFF')};
    }
  }
`;
