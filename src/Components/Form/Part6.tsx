import React, { useCallback, useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom';
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

const App: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const [radio13, setRadio13] = useState({ name: '', value: '' });
  const [radio14, setRadio14] = useState({ name: '', value: '' });
  const [radio15, setRadio15] = useState({ name: '', value: '' });
  const [radio16, setRadio16] = useState({ name: '', value: '' });

  useEffect(() => {
    if (sessionStorage.getItem('data5')) {
      setRadio13(JSON.parse(sessionStorage.getItem('data5') as string)[0]);
      setRadio14(JSON.parse(sessionStorage.getItem('data5') as string)[1]);
      setRadio15(JSON.parse(sessionStorage.getItem('data5') as string)[2]);
      setRadio16(JSON.parse(sessionStorage.getItem('data5') as string)[3]);
    }
  }, []);

  const handleClickLeft = useCallback(() => {
    history.push('/questionario/5');
  }, [history]);
  const handleSubmitRadio = useCallback(
    (event: React.SyntheticEvent) => {
      event.preventDefault();
      sessionStorage.setItem(
        'data5',
        `[${JSON.stringify(radio13)},
      ${JSON.stringify(radio14)},
      ${JSON.stringify(radio15)},
      ${JSON.stringify(radio16)}]`,
      );
      history.push('/questionario/7');
    },
    [history, radio13, radio14, radio15, radio16],
  );
  return (
    <AnimationContainer>
      <form className={classes.text} onSubmit={handleSubmitRadio}>
        <RadioButton
          name="radio13"
          question="13- Tem dificuldades no serviço (seu trabalho é penoso,
            causa-lhe sofrimento)?"
          radio={radio13}
          setRadio={setRadio13}
        />
        <RadioButton
          name="radio14"
          question="14- É incapaz de desempenhar um papel útil em sua vida?"
          radio={radio14}
          setRadio={setRadio14}
        />
        <RadioButton
          name="radio15"
          question="15- Tem perdido o interesse pelas coisas?"
          radio={radio15}
          setRadio={setRadio15}
        />
        <RadioButton
          name="radio16"
          question="16- Você se sente uma pessoa inútil sem préstimo?"
          radio={radio16}
          setRadio={setRadio16}
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
      </form>
    </AnimationContainer>
  );
};

export default App;
