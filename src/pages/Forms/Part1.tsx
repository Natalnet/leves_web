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
}

const App: React.FC<Props> = ({ changePageLeft }) => {
  const classes = useStyles();
  return (
    <AnimationContainer>
      <div className={classes.text}>
        <p>
          A seguir você encontrará perguntas que te farão refletir sobre seus
          próprios sentimentos.
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
        <Grid item onClick={changePageLeft}>
          <Button type="button" text="Vamos lá" />
        </Grid>
      </Grid>
    </AnimationContainer>
  );
};

export default App;
