import React, { useCallback } from 'react';

import { Grid } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Form } from '@unform/web';
import Button from '../Button';
import TextField from '../TextField';
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
  const handleSaveForm2 = useCallback((data: unknown) => {
    localStorage.setItem('data1', String(data));
  }, []);
  return (
    <AnimationContainer>
      <Form className={classes.text} onSubmit={handleSaveForm2}>
        <TextField
          label="Como você se sente em relação aos seus colegas de trabalho?"
          name="question"
          width="250px"
        />
      </Form>
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
