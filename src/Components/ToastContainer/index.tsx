import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { ToastMessage } from '../../hooks/ToastContext';
import Toast from './Toast';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }),
);

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {messages.map((message) => (
        <Toast key={message.id} message={message} />
      ))}
    </div>
  );
};
export default ToastContainer;
