import styled from 'styled-components';
import { shade } from 'polished';

export const ContentText = styled.div`
  /* Esse é para mudar as cores padrão do formulário */
  .MuiFormLabel-root,
  .MuiInputBase-root {
    color: white !important;
  }
  /* Esses dois foram para mudar o underline do formulário */
  .MuiInput-underline:before {
    border-bottom: 2px solid #fff !important;
  }
  .MuiInput-underline:after {
    border-bottom: 2px solid ${shade(0.15, '#fff')} !important;
  }
`;
