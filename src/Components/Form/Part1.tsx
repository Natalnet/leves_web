import React, { useCallback } from 'react';

import { Grid } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import Button from '../Button';
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
      margin: '10% 10%',
      fontWeight: 600,
      textAlign: 'center',
    },
  }),
);

const App: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleClickRight = useCallback(() => {
    history.push('/questionario/2');
  }, [history]);

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
        <Grid item onClick={handleClickRight}>
          <Button type="button" text="Vamos lá" />
        </Grid>
      </Grid>
    </AnimationContainer>
  );
};

export default App;
