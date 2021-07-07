import React, { useEffect } from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';
import { ToastMessage, useToast } from '../../../hooks/ToastContext';

interface ToastContainerProps {
  message: ToastMessage;
}

const Toast: React.FC<ToastContainerProps> = ({ message }) => {
  const { removeToast } = useToast();
  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 4000);
    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, message]);
  return (
    <>
      <Alert
        key={message.id}
        severity={message.type}
        onClose={() => removeToast(message.id)}
      >
        <AlertTitle>{message.title}</AlertTitle>
        {message.description}
      </Alert>
    </>
  );
};
export default Toast;
