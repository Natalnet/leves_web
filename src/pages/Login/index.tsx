import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Container, Dialog, Grid } from '@material-ui/core';
import { Rectangle } from './styles';
import logoLeves from '../../assets/logoleves.png';
import logoUfrn from '../../assets/ufrn.png';
import frase from '../../assets/frase.png';

const Login: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Container maxWidth="xl">
      {/* Container é um componente responsivo do material ui */}
      {/* Grid é um componente responsivo do material ui para 
      alinhar os elementos. */}
      <Grid
        container
        direction="row"
        justify="flex-end"
        alignItems="flex-start"
      >
        <Rectangle>
          {/* a tag Link do react-router-dom vai redirecionar o usuário 
          para as rotas registro e login */}
          <Link to="/register" className="link">
            Cadastre-se
          </Link>
          {/* Componente do material ui para botão, não é necessário 
          redirecionar para outro link, precisa abrir um dialog com 
          fundo transparente. */}
          <Button onClick={handleClickOpen}>Entrar</Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <p>teste</p>
          </Dialog>
        </Rectangle>
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center">
        {/* Box é um componente coringa para deixar as tags com uma 
        cara mais responsiva, utilizei para resolver um problema que estava
        tendo com responsividade. */}
        <Box width="100%" maxWidth={600} minWidth={336} clone>
          <img src={logoLeves} alt="logo leves" />
        </Box>
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center">
        <Box width="100%" maxWidth={1500} minWidth={360} clone>
          <img src={frase} alt="frase" />
        </Box>
      </Grid>
      <Grid container direction="row" justify="flex-end" alignItems="flex-end">
        <Box width="100%" maxWidth={160} minWidth={80} clone>
          <img src={logoUfrn} alt="logo ufrn" />
        </Box>
      </Grid>
    </Container>
  );
};

export default Login;
