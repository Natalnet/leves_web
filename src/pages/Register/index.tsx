import React from 'react';
import { Divider, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import TextField from '../../Components/TextField';
import LogoUfrn from '../../Components/LogoUfrn';
import Button from '../../Components/Button';
import PasswordField from '../../Components/PasswordField';
import { Background, Container, Content } from './styles';
import Points from '../../assets/points.png';

const Register: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  // eslint-disable-next-line @typescript-eslint/ban-types
  const handleSubmit = (data: object) => {
    // eslint-disable-next-line no-console
    console.log(data);
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
          <Form onSubmit={handleSubmit}>
            <TextField name="email" label="Digite seu email" width="24em" />
            <TextField
              name="emailConfirmation"
              label="Confirme seu email"
              width="24em"
            />
            <PasswordField
              name="password"
              className="password1"
              label="Escolha uma senha"
              width="24em"
            />
            <PasswordField
              name="passwordConfirmation"
              label="Confirme sua senha"
              width="24em"
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
              <Button type="submit" text="Concluir" />
            </Grid>
          </Form>
        </Grid>
      </Content>
      <LogoUfrn />
    </Container>
  );
};

export default Register;
