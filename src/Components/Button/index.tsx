import React, { ButtonHTMLAttributes } from 'react';
import { Button, createStyles, makeStyles, Theme } from '@material-ui/core';
import { ContentButton } from './style';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
      backgroundColor: '#04799c',
    },
  }),
);
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}
const Buttons: React.FC<Props> = ({ type, text }) => {
  const classes = useStyles();
  return (
    <ContentButton>
      <Button type={type} variant="contained" className={classes.button}>
        {text}
      </Button>
    </ContentButton>
  );
};

export default Buttons;
