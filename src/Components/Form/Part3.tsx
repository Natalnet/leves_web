import React, { useCallback, useState } from 'react';

import { Grid } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
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
  const [radio1, setRadio1] = useState({ name: '', value: '' });
  const [radio2, setRadio2] = useState({ name: '', value: '' });
  const [radio3, setRadio3] = useState({ name: '', value: '' });
  const [radio4, setRadio4] = useState({ name: '', value: '' });
  const classes = useStyles();
  const history = useHistory();
  const handleClickLeft = useCallback(() => {
    history.push('/questionario/2');
  }, [history]);
  const handleSubmitRadio = useCallback(
    (event: React.SyntheticEvent) => {
      console.log(radio1, radio2, radio3, radio4);
      event.preventDefault();
      sessionStorage.setItem(
        'data2',
        JSON.stringify(`${radio1} \n ${radio2} \n ${radio3} \n ${radio4}`),
      );
      // history.push('/questionario/4');
    },
    [radio1, radio2, radio3, radio4],
  );
  return (
    <AnimationContainer>
      <form className={classes.text} onSubmit={handleSubmitRadio}>
        <RadioButton
          name="radio1"
          question="1- Você tem dores de cabeça frequentes?"
          radio={radio1}
          setRadio={setRadio1}
        />
        <RadioButton
          name="radio2"
          question="2- Tem falta de apetite?"
          radio={radio2}
          setRadio={setRadio2}
        />
        <RadioButton
          name="radio3"
          question="3- Dorme mal?"
          radio={radio3}
          setRadio={setRadio3}
        />
        <RadioButton
          name="radio4"
          question="4- Assusta-se com facilidade?"
          radio={radio4}
          setRadio={setRadio4}
        />
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          className={classes.div}
        >
          <Grid item onClick={handleClickLeft}>
            <Button type="submit" text="voltar" />
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
