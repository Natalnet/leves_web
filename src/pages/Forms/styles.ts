import styled from 'styled-components';
import LogoLeves from '../../assets/logoleves.png';
// import { shade } from 'polished';

export const Container = styled.div`
  height: 80vh;
  display: flex;
  align-items: stretch;
  .Grid-LogoUfrn {
    justify-content: flex-end;
    width: 10%;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 45em;
  width: 90%;
  color: #fff;
  margin-left: 4em;
  p {
    font-size: 1.2em;
    font-family: 'Open Sans', sans-serif;
  }
  img {
    margin-left: 5em;
    margin-bottom: 0.1em;
  }
`;

export const Background = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  background: url(${LogoLeves}) no-repeat center;
  background-size: 22em;
  .MuiDivider-root {
    background-color: #fff;
    height: 20em;
    align-self: center;
  }
`;
