import React from 'react';
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
interface Props {
  text: string;
}
const Buttons: React.FC<Props> = ({ text }) => {
  const classes = useStyles();
  return (
    <ContentButton>
      <Button type="submit" variant="contained" className={classes.button}>
        {text}
      </Button>
    </ContentButton>
  );
};

export default Buttons;
