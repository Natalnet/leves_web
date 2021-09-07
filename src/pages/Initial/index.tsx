import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { AnimationContainerTop } from './styles';
import Frase from '../../Components/Frase';
import Menu from '../../Components/Menu';
import LogoUfrn from '../../Components/LogoUfrn';
import image from '../../assets/frase.png';
import tudobem from '../../assets/tudobem.png';
import cuide from '../../assets/cuide.png';
import diario from '../../assets/diario.png';

const useStyles = makeStyles(() =>
  createStyles({
    margin: {
      marginTop: '6em',
      marginBottom: '3em',
    },
    hover: {
      '&:hover': {
        backgroundColor: '#08080813',
      },
    },
  }),
);
const Home: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Menu />
      <AnimationContainerTop>
        <Container maxWidth="xl">
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            className={classes.margin}
          >
            <Grid item xs={12} sm={3}>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                className={classes.margin}
              >
                <Link to="/questionario" className={classes.hover}>
                  <img src={tudobem} alt="prancheta" width="200px" />
                </Link>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                className={classes.margin}
              >
                <Link to="/questionario" className={classes.hover}>
                  <img src={cuide} alt="flor" width="312px" />
                </Link>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                className={classes.margin}
              >
                <Link to="/questionario" className={classes.hover}>
                  <img src={diario} alt="diario" width="296px" />
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Frase alt="Levantamento de emoções e sentimentos" src={image} />
          <LogoUfrn />
        </Container>
      </AnimationContainerTop>
    </>
  );
};

export default Home;
