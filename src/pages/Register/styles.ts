import styled, { keyframes } from 'styled-components';
import LogoLeves from '../../assets/logoleves.png';
// import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
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
  img {
    margin-left: 5em;
    margin-bottom: 0.1em;
  }
  h2 {
    display: inline-block;
    margin-left: 0.2em;
    text-transform: uppercase;
  }
  .grid,
  > div {
    margin-top: 3em;
  }
  .password1 {
    margin-top: 2em;
  }
  a {
    text-decoration: none;
  }
  @media screen and (max-device-width: 600px) {
    .MuiFormControl-root {
      width: 20em;
    }
  }
`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;
export const AnimationContainer = styled.div`
  animation: ${appearFromRight} 1s;
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
