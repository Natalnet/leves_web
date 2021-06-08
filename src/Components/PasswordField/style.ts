import styled from 'styled-components';
import { shade } from 'polished';

export const ContentPassword = styled.div`
  /* Esse é para mudar as cores padrão do formulário */
  .MuiInputBase-root,
  .MuiFormLabel-root,
  .MuiIconButton-root {
    color: white !important;
  }
  /* Esses dois foram para mudar o underline do formulário */
  .MuiInput-underline:before {
    border-bottom: 2px solid #fff !important;
  }
  .MuiInput-underline:after {
    border-bottom: 2px solid ${shade(0.15, '#fff')} !important;
  }
  @media screen and (max-device-width: 320px) {
    .MuiFormControl-root {
      width: 15em;
    }
  }
`;
