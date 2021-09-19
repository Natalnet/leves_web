import React from 'react';
import { Divider, Grid } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Button from '../../Components/Button';
import LogoUfrn from '../../Components/LogoUfrn';
import { Background, Container, Content, AnimationContainer } from './styles';

const useStyles = makeStyles(() =>
  createStyles({
    h1: {
      marginTop: '1.5em',
      color: '#FFF',
      fontSize: '2em',
      textTransform: 'uppercase',
      textAlign: 'center',
    },
    p: {
      marginTop: '1em',
    },
    a: {
      textDecoration: 'none',
    },
    div: {
      marginTop: '4em',
    },
    text: {
      marginTop: '4em',
    },
  }),
);
const Register: React.FC = () => {
  // const history = useHistory();
  const classes = useStyles();

  return (
    <>
      <h1 className={classes.h1}>
        Vamos embarcar juntos numa jornada rumo ao autoconhecimento?
      </h1>
      <Container>
        <Background>
          <Divider orientation="vertical" flexItem />
        </Background>
        <Content>
          <AnimationContainer>
            <div className={classes.text}>
              <p>
                A seguir você encontrará perguntas que te farão refletir sobre
                seus próprios sentimentos.
              </p>
              <p>
                É muito importante que você responda com calma e honestidade.
              </p>
              <p className={classes.p}>
                Lembre-se que estamos aqui por você e que seus dados estão
                seguros conosco!
              </p>
            </div>
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              className={classes.div}
            >
              <Link to="/login" className={classes.a}>
                <Button text="Vamos lá" />
              </Link>
            </Grid>
          </AnimationContainer>
        </Content>
        <LogoUfrn />
      </Container>
    </>
  );
};

export default Register;
