import React from 'react';

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

interface Props {
  changePageRight: () => void;
}

const App: React.FC<Props> = ({ changePageRight }) => {
  const classes = useStyles();
  return (
    <AnimationContainer>
      <div className={classes.text}>
        <RadioButton question="17- Tem tido ideia de acabar com a vida?" />
        <RadioButton question="18- Sente-se cansado(a) o tempo todo?" />
        <RadioButton question="19- Você se cansa com facilidade?" />
        <RadioButton question="20- Tem sensações desagradáveis no estômago?" />
      </div>
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
        <Grid item>
          <Button type="submit" text="concluir" />
        </Grid>
      </Grid>
    </AnimationContainer>
  );
};

export default App;
