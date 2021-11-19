import React, { useCallback } from 'react';

import { Grid } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Form } from '@unform/web';
import Button from '../Button';
import TextField from '../TextField/TextField';
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
    sessionStorage.setItem('data1', String(data));
  }, []);
  return (
    <AnimationContainer>
      <Form className={classes.text} onSubmit={handleSaveForm2}>
        <TextField
          name="question1"
          question="Como você se sente em relação aos seus colegas de trabalho?"
        />
        <TextField
          name="question2"
          question="Como você se sente em relação ao seu gestor imediato?"
        />
        <TextField
          name="question3"
          question="Como você se sente em relação às atividades que desempenha?"
        />
        <TextField
          name="question4"
          question="Como você se sente em relação ao seu salário?"
        />
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          className={classes.div}
        >
          <Grid item onClick={changePageRight}>
            <Button type="button" text="voltar" />
          </Grid>
          <Grid item onClick={changePageLeft}>
            <Button type="submit" text="próximo" />
          </Grid>
        </Grid>
      </Form>
    </AnimationContainer>
  );
};

export default App;
