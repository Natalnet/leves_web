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
  const [radio9, setRadio9] = useState({ name: '', value: '' });
  const [radio10, setRadio10] = useState({ name: '', value: '' });
  const [radio11, setRadio11] = useState({ name: '', value: '' });
  const [radio12, setRadio12] = useState({ name: '', value: '' });

  useEffect(() => {
    if (sessionStorage.getItem('data4')) {
      setRadio9(JSON.parse(sessionStorage.getItem('data4') as string)[0]);
      setRadio10(JSON.parse(sessionStorage.getItem('data4') as string)[1]);
      setRadio11(JSON.parse(sessionStorage.getItem('data4') as string)[2]);
      setRadio12(JSON.parse(sessionStorage.getItem('data4') as string)[3]);
    }
  }, []);

  const handleClickLeft = useCallback(() => {
    history.push('/questionario/4');
  }, [history]);
  const handleSubmitRadio = useCallback(
    (event: React.SyntheticEvent) => {
      event.preventDefault();
      sessionStorage.setItem(
        'data4',
        `[${JSON.stringify(radio9)},
        ${JSON.stringify(radio10)},
        ${JSON.stringify(radio11)},
        ${JSON.stringify(radio12)}]`,
      );
      history.push('/questionario/6');
    },
    [history, radio9, radio10, radio11, radio12],
  );
  return (
    <AnimationContainer>
      <form className={classes.text} onSubmit={handleSubmitRadio}>
        <RadioButton
          name="radio9"
          question="9- Tem se sentido triste ultimamente?"
          radio={radio9}
          setRadio={setRadio9}
        />
        <RadioButton
          name="radio10"
          question="10- Tem chorado mais do que de costume?"
          radio={radio10}
          setRadio={setRadio10}
        />
        <RadioButton
          name="radio11"
          question="11- Encontra dificuldades para realizar com satisfação
          suas atividades diárias?"
          radio={radio11}
          setRadio={setRadio11}
        />
        <RadioButton
          name="radio12"
          question="12- Tem dificuldades para tomar decisões?"
          radio={radio12}
          setRadio={setRadio12}
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
