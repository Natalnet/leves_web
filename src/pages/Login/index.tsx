import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  createStyles,
  Dialog,
  Grid,
  makeStyles,
  Theme,
} from '@material-ui/core';

import Frase from '../../Components/Frase';
import LogoUfrn from '../../Components/LogoUfrn';
import TextField from '../../Components/TextField';
import PasswordField from '../../Components/PasswordField';
import { Rectangle, ContentLogin } from './styles';

import './style.css';
import frase from '../../assets/frase.png';
import logoLeves from '../../assets/logoleves.png';

// Os componentes vinham com um css já construído.
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
      backgroundColor: '#FFF',
    },
    link: {
      color: '#FFF',
    },
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
  }),
);
interface State {
  login: string;
  password: string;
}
const Login: React.FC = () => {
  // Pegando os dados do formulário
  const [values, setValues] = React.useState<State>({
    login: '',
    password: '',
  });
  // Operador do Dialog
  const [open, setOpen] = React.useState(false);
  // Para usar o css do Material-ui
  const classes = useStyles();

  // Para abrir o Dialog
  const handleClickOpen = () => {
    setOpen(true);
  };
  // A cada mudança atualizar o estado dos valores
  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };
  // Fechar o Dialog
  const handleClose = () => {
    setOpen(false);
  };
  // Para enviar para a api
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const handleSubmit = () => {};
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
        </Rectangle>
      </Grid>
      <Grid
        container
        direction="row"
        justify="flex-end"
        alignItems="flex-start"
      >
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <ContentLogin>
            <form>
              <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="center"
              >
                <TextField
                  label="Login"
                  width="18em"
                  handleChange={handleChange('login')}
                  login={values.login}
                />
                <PasswordField
                  label="Senha"
                  width="18em"
                  handleChange={handleChange('password')}
                  password={values.password}
                />
                <Link to="/" className={classes.link}>
                  Recuperar senha
                </Link>
                <Button
                  type="submit"
                  variant="contained"
                  className={classes.button}
                  onClick={handleSubmit}
                >
                  Entrar
                </Button>
              </Grid>
            </form>
          </ContentLogin>
        </Dialog>
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center">
        {/* Box é um componente coringa para deixar as tags com uma 
        cara mais responsiva, utilizei para resolver um problema que estava
        tendo com responsividade. */}
        <Box width="100%" maxWidth={400} minWidth={336} clone>
          <img src={logoLeves} alt="logo leves" />
        </Box>
      </Grid>
      <Frase src={frase} alt="frase" />
      <LogoUfrn />
    </Container>
  );
};

export default Login;
