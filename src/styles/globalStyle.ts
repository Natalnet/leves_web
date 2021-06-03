import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: linear-gradient(
      180deg, 
      #00AED9 0%, 
      #00AFDA 4.17%, 
      #00AFDA 8.62%, 
      #00AAE5 19.1%, 
      #01A7E3 22.53%, 
      #00A6E2 25%, 
      #009AD8 27.73%, 
      #0097D3 30.04%, 
      #0096D3 32.29%, 
      #0091D0 35.66%, 
      #008ECD 37.07%, 
      #008ECC 39.58%, 
      #008CCA 39.59%, 
      #0085C6 42.71%, 
      #007FC0 48.96%, 
      #017CBF 53.12%, 
      #0076BA 59.9%,
      #0071B7 67.19%, 
      #016DB5 71.96%, 
      #016DB5 76.04%,
      #006BB1 80.21%, 
      #006AB0 82.9%, 
      #0068AF 86.46%,
      #0066AE 90.56%, 
      #0066AE 96.15%, 
      #0066AE 98.96%
    );
    background-repeat: no-repeat;
    background-attachment: fixed;
    font: 16px Roboto, sans-serif;
  }
`;
