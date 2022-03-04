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
  const [radio5, setRadio5] = useState({ name: '', value: '' });
  const [radio6, setRadio6] = useState({ name: '', value: '' });
  const [radio7, setRadio7] = useState({ name: '', value: '' });
  const [radio8, setRadio8] = useState({ name: '', value: '' });

  useEffect(() => {
    if (sessionStorage.getItem('data3')) {
      setRadio5(JSON.parse(sessionStorage.getItem('data3') as string)[0]);
      setRadio6(JSON.parse(sessionStorage.getItem('data3') as string)[1]);
      setRadio7(JSON.parse(sessionStorage.getItem('data3') as string)[2]);
      setRadio8(JSON.parse(sessionStorage.getItem('data3') as string)[3]);
    }
  }, []);

  const handleClickLeft = useCallback(() => {
    history.push('/questionario/3');
  }, [history]);
  const handleSubmitRadio = useCallback(
    (event: React.SyntheticEvent) => {
      event.preventDefault();
      sessionStorage.setItem(
        'data3',
        `[${JSON.stringify(radio5)},
        ${JSON.stringify(radio6)},
        ${JSON.stringify(radio7)},
        ${JSON.stringify(radio8)}]`,
      );
      history.push('/questionario/5');
    },
    [history, radio5, radio6, radio7, radio8],
  );
  return (
    <AnimationContainer>
      <form className={classes.text} onSubmit={handleSubmitRadio}>
        <RadioButton
          name="radio5"
          question="5- Tem tremores nas mãos?"
          radio={radio5}
          setRadio={setRadio5}
        />
        <RadioButton
          name="radio6"
          question="6- Sente-se nervoso(a), tenso(a) ou preocupado(a)?"
          radio={radio6}
          setRadio={setRadio6}
        />
        <RadioButton
          name="radio7"
          question="7- Tem má digestão?"
          radio={radio7}
          setRadio={setRadio7}
        />
        <RadioButton
          name="radio8"
          question="8- Tem dificuldade de pensar com clareza?"
          radio={radio8}
          setRadio={setRadio8}
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
