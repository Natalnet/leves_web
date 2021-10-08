import React from 'react';

import { Grid } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '../../Components/Button';
import { AnimationContainer } from './styles';

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
        <p>
          A seguir você encontrará perguntas que te farão refletir sobre seus
          próprios sentimentos. Parte 4!
        </p>
        <p>É muito importante que você responda com calma e honestidade.</p>
        <p className={classes.p}>
          Lembre-se que estamos aqui por você e que seus dados estão seguros
          conosco!
        </p>
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
