import React from 'react';
import { useParams } from 'react-router-dom';
import { Divider } from '@material-ui/core';
import TituloForm from '../../Components/Frase/TituloForm';
import LogoUfrn from '../../Components/LogoUfrn';
import Form from '../../Components/FormWelcome';
import { Background, Container, Content } from './styles';

interface Param {
  id: string;
}
const Welcome: React.FC = () => {
  // const history = useHistory();
  const { id } = useParams<Param>();
  return (
    <>
      <TituloForm frase="Seja bem vindo ao leves!" />
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

export default Welcome;
