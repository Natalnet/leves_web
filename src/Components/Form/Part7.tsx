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
  const [radio17, setRadio17] = useState({ name: '', value: '' });
  const [radio18, setRadio18] = useState({ name: '', value: '' });
  const [radio19, setRadio19] = useState({ name: '', value: '' });
  const [radio20, setRadio20] = useState({ name: '', value: '' });

  useEffect(() => {
    if (sessionStorage.getItem('data6')) {
      setRadio17(JSON.parse(sessionStorage.getItem('data6') as string)[0]);
      setRadio18(JSON.parse(sessionStorage.getItem('data6') as string)[1]);
      setRadio19(JSON.parse(sessionStorage.getItem('data6') as string)[2]);
      setRadio20(JSON.parse(sessionStorage.getItem('data6') as string)[3]);
    }
  }, []);

  const handleClickLeft = useCallback(() => {
    history.push('/questionario/6');
  }, [history]);
  const handleSubmitRadio = useCallback(
    (event: React.SyntheticEvent) => {
      event.preventDefault();
      sessionStorage.setItem(
        'data6',
        `[${JSON.stringify(radio17)},
      ${JSON.stringify(radio18)},
      ${JSON.stringify(radio19)},
      ${JSON.stringify(radio20)}]`,
      );
      history.push('/questionario/7');
    },
    [history, radio17, radio18, radio19, radio20],
  );
  return (
    <AnimationContainer>
      <form className={classes.text} onSubmit={handleSubmitRadio}>
        <RadioButton
          name="radio17"
          question="17- Tem tido ideia de acabar com a vida?"
          radio={radio17}
          setRadio={setRadio17}
        />
        <RadioButton
          name="radio18"
          question="18- Sente-se cansado(a) o tempo todo?"
          radio={radio18}
          setRadio={setRadio18}
        />
        <RadioButton
          name="radio19"
          question="19- Você se cansa com facilidade?"
          radio={radio19}
          setRadio={setRadio19}
        />
        <RadioButton
          name="radio20"
          question="20- Tem sensações desagradáveis no estômago?"
          radio={radio20}
          setRadio={setRadio20}
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
            <Button type="submit" text="concluir" />
          </Grid>
        </Grid>
      </form>
    </AnimationContainer>
  );
};

export default App;
