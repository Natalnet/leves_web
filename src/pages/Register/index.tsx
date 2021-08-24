import React from 'react';
import { Divider, Grid } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import TextField from '../../Components/TextField';
import LogoUfrn from '../../Components/LogoUfrn';
import Button from '../../Components/Button';
import PasswordField from '../../Components/PasswordField';
import { Background, Container, Content, AnimationContainer } from './styles';
import Points from '../../assets/points.png';
import getValidationErrors from '../../utils/getValidationErrors';
import api from '../../services/api';
import { useToast } from '../../hooks/ToastContext';

interface SignUpFormData {
  email: string;
  emailConfirmation: string;
  password: string;
  passwordConfirmation: string;
}
const Register: React.FC = () => {
  const formRef = React.useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = React.useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email é Obrigatório')
            .email('Deve possuir um email válido'),
          emailConfirmation: Yup.string()
            .required('Confirmação de email é obrigatório')
            .email('Deve ser um email válido')
            .oneOf([Yup.ref('email'), null], 'Emails devem ser iguais'),
          password: Yup.string().min(6, 'Mínimo 6 dígitos'),
          passwordConfirmation: Yup.string()
            .min(6, 'Mínimo 6 dígitos')
            .oneOf([Yup.ref('password'), null], 'Senhas devem ser iguais'),
        });
        await schema.validate(data, { abortEarly: false });
        await api.post('/users', data);
        history.push('/login');
        addToast({
          type: 'success',
          title: 'Cadastro feito com sucesso',
          description: 'Você já pode fazer o seu logon no Leves!',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }
        addToast({
          type: 'error',
          title: 'Erro durante o cadastro',
          description:
            'Ocorreu um erro ao tentar fazer um novo cadastro, por favor, tente novamente.',
        });
      }
    },
    [addToast, history],
  );
  return (
    <Container>
      <Background>
        <Divider orientation="vertical" flexItem />
      </Background>
      <Content>
        <AnimationContainer>
          <div>
            <img src={Points} alt="3 pontos" width="16px" />
            <h2>Crie sua conta </h2>
          </div>
          <Grid container direction="row" justify="center" alignItems="center">
            <Form ref={formRef} noValidate onSubmit={handleSubmit}>
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
        </AnimationContainer>
      </Content>
      <LogoUfrn />
    </Container>
  );
};

export default Register;
