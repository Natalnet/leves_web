import styled from 'styled-components';
import { shade } from 'polished';

export const ContentText = styled.div`
  @media screen and (max-device-width: 320px) {
    .MuiFormControl-root {
      width: 15em;
    }
  }
  .MuiFormLabel-root.Mui-error,
  .MuiFormHelperText-root {
    color: #9f0000;
  }
  .MuiInput-underline.Mui-error:after {
    border-bottom-color: ${shade(0.2, '#9f0000')};
  }
  .MuiInput-underline.Mui-error:before {
    border-bottom-color: #9f0000;
  }
  /* Esse é para mudar as cores padrão do formulário */
  .MuiFormLabel-root,
  .MuiInputBase-root,
  .MuiFormLabel-root.Mui-focused {
    color: white;
  }
  /* Esses dois foram para mudar o underline do formulário */
  .MuiInput-underline:before {
    border-bottom: 2px solid #fff;
  }
  .MuiInput-underline:after,
  .MuiInput-underline:hover:not(.Mui-disabled):before,
  .MuiInput-underline.Mui-error.Mui-focused:after {
    border-bottom: 2px solid ${shade(0.15, '#fff')};
  }
`;
