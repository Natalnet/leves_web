import styled from 'styled-components';
import { shade } from 'polished';

export const Rectangle = styled.div`
  width: 18em;
  height: 4em;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 1em;

  .link {
    color: #5f5f5f;
    font-size: 1em;
    transition: color 0.2s;
    &:hover {
      color: ${shade(0.7, '#5f5f5f')};
    }
  }

  .MuiButton-root {
    border: 0.125em solid #00afda;
    border-radius: 0;
    padding: 0.125em 1.5em 0.0625em 1.5em;
    color: #00afda;
    background: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 7em;
    height: 2em;
    font-size: 1em;
    text-transform: none;
    transition: border-color 0.2s, color 0.2s;
    &:hover {
      border: 0.125em solid ${shade(0.3, '#00adfa')};
      color: ${shade(0.4, '#00adfa')};
    }
  }
`;

export const ContentLogin = styled.div`
  a {
    transition: color 0.2s;
    margin-top: 1.5em;
    &:hover {
      color: ${shade(0.1, '#fff')};
    }
  }
  .MuiButton-root {
    font-weight: 500;
    width: 6em;
    height: 1.5em;
    margin-top: 2em;
    border-radius: 0.56em;
    color: #000;
    text-transform: none;
    font-size: 1em;
    transition: background-color 0.2s, color 0.2s;
    &:hover {
      background-color: ${shade(0.2, '#FFFFFF')};
      color: ${shade(0.3, '#000')};
    }
  }
`;
