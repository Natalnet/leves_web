import styled from 'styled-components';

export const Rectangle = styled.div`
  width: 19em;
  height: 6em;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 1em;

  .link {
    color: #5f5f5f;
    font-size: 1.2em;
  }

  .link:hover {
    color: #424141;
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
    font-size: 1.2em;
    text-transform: none;
  }
  .MuiButton-root:hover {
    border: 0.125em solid #007fc0;
    color: #007fc0;
  }
`;
