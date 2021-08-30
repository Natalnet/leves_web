import React from 'react';
import { AlertTitle } from '@material-ui/lab';
import { ToastMessage, useToast } from '../../../hooks/ToastContext';
import { Container, ColorAlert } from './styles';

interface ToastContainerProps {
  message: ToastMessage;
}

const Toast: React.FC<ToastContainerProps> = ({ message }) => {
  const { removeToast } = useToast();
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     removeToast(message.id);
  //   }, 4000);
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [removeToast, message]);
  return (
    <Container>
      <ColorAlert
        key={message.id}
        severity={message.type}
        onClose={() => removeToast(message.id)}
      >
        <AlertTitle>{message.title}</AlertTitle>
        {message.description}
      </ColorAlert>
    </Container>
  );
};
export default Toast;
