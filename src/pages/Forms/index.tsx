import React from 'react';
import { useParams } from 'react-router-dom';
import { Divider } from '@material-ui/core';
import TituloEscolhido from '../../Components/Frase/TituloEscolhido';
import LogoUfrn from '../../Components/LogoUfrn';
import Form from '../../Components/Form';
import { Background, Container, Content } from './styles';

interface Param {
  id: string;
}
const Register: React.FC = () => {
  // const history = useHistory();
  const { id } = useParams<Param>();
  return (
    <>
      <TituloEscolhido page={id} />
      <Container>
        <Background>
          <Divider orientation="vertical" flexItem />
        </Background>
        <Content>
          <Form page={id} />
        </Content>
        <LogoUfrn />
      </Container>
    </>
  );
};

export default Register;
