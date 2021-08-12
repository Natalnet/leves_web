import styled, { css } from 'styled-components';
import { Alert, Color } from '@material-ui/lab';

interface ToastProps {
  severity?: Color;
}

const toastTypeVariations = {
  info: css`
    background: #ebf8ff;
    color: #3172b7;
  `,
  success: css`
    background: #11823a;
    color: #fafafa;
  `,
  error: css`
    background: #820909;
    color: #fafafa;
  `,
  warning: css`
    background: #b87614;
    color: #d4cd19;
  `,
};
export const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  padding: 30px;
  overflow: hidden;
`;
export const ColorAlert = styled(Alert)<ToastProps>`
  width: 480px;
  position: relative;
  padding: 16px 30px 16px 16px;

  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  display: flex;

  & + div {
    margin-top: 124px;
  }

  ${(props) => toastTypeVariations[props.severity || 'info']}

  button {
    position: absolute;
    right: 16px;
    top: 19px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  }
`;
