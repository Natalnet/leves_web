import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import {
  Box,
  Button,
  Container,
  createStyles,
  Dialog,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  makeStyles,
  TextField,
  Theme,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { Rectangle } from './styles';
import './style.css';
import logoLeves from '../../assets/logoleves.png';
import logoUfrn from '../../assets/ufrn.png';
import frase from '../../assets/frase.png';

// Os componentes vinham com um css já construído.
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '35ch',
    },
    button: {
      margin: theme.spacing(1),
      backgroundColor: '#FFF',
    },
    link: {
      color: '#FFF',
    },
  }),
);

interface State {
  login: string;
  password: string;
  showPassword: boolean;
}
const Login: React.FC = () => {
  // Operador do Dialog
  const [open, setOpen] = React.useState(false);
  // Para usar o css do Material-ui
  const classes = useStyles();
  // Pegando os dados do formulário
  const [values, setValues] = React.useState<State>({
    login: '',
    password: '',
    showPassword: false,
  });
  // Para abrir o Dialog
  const handleClickOpen = () => {
    setOpen(true);
  };
  // A cada mudança atualizar o estado dos valores
  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };
  // Para o botão de mostrar a senha
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  // Fechar o Dialog
  const handleClose = () => {
    setOpen(false);
  };
  // Para enviar para a api
  const handleSubmit = () => {
    // eslint-disable-next-line no-console
    console.log(values.login, values.password);
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
          <Grid container direction="row" justify="center" alignItems="center">
            <FormControl className={clsx(classes.margin, classes.textField)}>
              <TextField
                id="standard-multiline-flexible"
                label="Login"
                multiline
                rowsMax={4}
                value={values.login}
                onChange={handleChange('login')}
              />
            </FormControl>
          </Grid>
          <Grid container direction="row" justify="center" alignItems="center">
            <FormControl className={clsx(classes.margin, classes.textField)}>
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
          >
            <Link to="/" className={classes.link}>
              Recuperar senha
            </Link>
            <Button
              variant="contained"
              className={classes.button}
              onClick={handleSubmit}
            >
              Entrar
            </Button>
          </Grid>
        </Dialog>
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
