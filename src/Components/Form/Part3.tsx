import React from 'react';

import { Grid } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '../Button';
import { AnimationContainer } from './styles';
import RadioButton from '../RadioButton';

const useStyles = makeStyles(() =>
  createStyles({
    p: {
      marginTop: '1em',
    },
    div: {
      marginTop: '4em',
    },
    text: {
      marginTop: '4em',
    },
  }),
);

interface Props {
  changePageLeft: () => void;
  changePageRight: () => void;
}

const App: React.FC<Props> = ({ changePageLeft, changePageRight }) => {
  const classes = useStyles();
  return (
    <AnimationContainer>
      <div className={classes.text}>
        <RadioButton question="1- Você tem dores de cabeça frequentes?" />
        <RadioButton question="2- Tem falta de apetite?" />
        <RadioButton question="3- Dorme mal?" />
        <RadioButton question="4- Assusta-se com facilidade?" />
      </div>
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        className={classes.div}
      >
        <Grid item onClick={changePageRight}>
          <Button type="submit" text="voltar" />
        </Grid>
        <Grid item onClick={changePageLeft}>
          <Button type="button" text="próximo" />
        </Grid>
      </Grid>
    </AnimationContainer>
  );
};

export default App;
