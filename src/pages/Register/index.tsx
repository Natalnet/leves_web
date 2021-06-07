import React from 'react';
import { Divider, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import TextField from '../../Components/TextField';
import LogoUfrn from '../../Components/LogoUfrn';
import Button from '../../Components/Button';
import PasswordField from '../../Components/PasswordField';
import { Background, Container, Content } from './styles';
import Points from '../../assets/points.png';

interface State {
  login: string;
  loginConfirmation: string;
  password: string;
  passwordConfirmation: string;
}
const Register: React.FC = () => {
  // Pegando os dados do formulário
  const [values, setValues] = React.useState<State>({
    login: '',
    loginConfirmation: '',
    password: '',
    passwordConfirmation: '',
  });
  // A cada mudança atualizar o estado dos valores
  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };
  return (
    <Container>
      <Background>
        <Divider orientation="vertical" flexItem />
      </Background>
      <Content>
        <div>
          <img src={Points} alt="3 pontos" width="16px" />
          <h2>Crie sua conta </h2>
        </div>
        <Grid container direction="row" justify="center" alignItems="center">
          <form>
            <TextField
              label="Digite seu email"
              width="24em"
              login={values.login}
              handleChange={handleChange('login')}
            />
            <TextField
              label="Confirme seu email"
              width="24em"
              login={values.loginConfirmation}
              handleChange={handleChange('loginConfirmation')}
            />
            <PasswordField
              className="password1"
              label="Escolha uma senha"
              width="24em"
              password={values.password}
              handleChange={handleChange('password')}
            />
            <PasswordField
              label="Confirme sua senha"
              width="24em"
              password={values.passwordConfirmation}
              handleChange={handleChange('passwordConfirmation')}
            />
            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="flex-end"
              className="grid"
            >
              <Link to="/login">
                <Button text="Voltar" />
              </Link>
              <Button text="Concluir" />
            </Grid>
          </form>
        </Grid>
      </Content>
      <LogoUfrn />
    </Container>
  );
};

export default Register;
