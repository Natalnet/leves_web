import styled from 'styled-components';
import { shade } from 'polished';

export const ContentPassword = styled.div`
  /* Esse é para mudar as cores padrão do formulário */
  .MuiInputBase-root,
  .MuiFormLabel-root,
  .MuiIconButton-root {
    color: white;
  }
  @media screen and (max-device-width: 320px) {
    .MuiFormControl-root {
      width: 15em;
    }
  }
  .MuiFormLabel-root.Mui-error,
  .MuiFormHelperText-root.Mui-error,
  .error {
    color: #9f0000;
  }
  .MuiInput-underline.Mui-error:after {
    border-bottom-color: ${shade(0.2, '#9f0000')};
  }
  .MuiInput-underline.Mui-error:before {
    border-bottom-color: #9f0000;
  }
  .MuiFormLabel-root.Mui-focused {
    color: white;
  }
  /* Esses dois foram para mudar o underline do formulário */
  .MuiInput-underline:before {
    border-bottom: 2px solid #fff;
  }
  .MuiInput-underline:after,
  .MuiInput-underline.Mui-error.Mui-focused:after,
  .MuiInput-underline:hover:not(.Mui-disabled):before {
    border-bottom: 2px solid ${shade(0.15, '#fff')};
  }
`;
