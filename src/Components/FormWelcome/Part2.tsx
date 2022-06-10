import React, { useCallback, useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom';
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

const App: React.FC = () => {
  const history = useHistory();
  const classes = useStyles();
  const [values, setValues] = useState({});
  useEffect(() => {
    setValues(
      sessionStorage.getItem('data1')
        ? JSON.parse(sessionStorage.getItem('data1') as string)
        : {},
    );
  }, []);
  const handleClickLeft = useCallback(() => {
    history.push('/welcome/1');
  }, [history]);
  const handleSaveForm2 = useCallback(
    (data: unknown) => {
      sessionStorage.setItem('data1', JSON.stringify(data));
      history.push('/welcome/3');
    },
    [history],
  );
  return (
    <AnimationContainer>
      <Form
        initialData={values}
        className={classes.text}
        onSubmit={handleSaveForm2}
      >
        <TextField name="pregnant" question="É gestante (está grávida)?" />
        <TextField name="kids" question="Você tem filhos?" />
        <TextField name="lactating" question="É lactante (amamenta)?" />
        <TextField
          name="institution"
          question="A qual instituição você está vinculado?"
        />
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          className={classes.div}
        >
          <Grid item onClick={handleClickLeft}>
            <Button type="button" text="voltar" />
          </Grid>
          <Grid item>
            <Button type="submit" text="próximo" />
          </Grid>
        </Grid>
      </Form>
    </AnimationContainer>
  );
};

export default App;
