import React from 'react';
import { Link } from 'react-router-dom';
import GlobalStyle, { Container, Rectangle, Logo } from './styles';
import logoLeves from '../../assets/logoleves.png';

const Initial: React.FC = () => (
  <Container>
    <Rectangle>
      {/* vai redirecionar o usuário para a rota register, substitui o 'a' pela tag Link do react-router-dom */}
      <Link to="/register">Cadastre-se</Link>
      <button type="button">Entrar</button>
    </Rectangle>
    <Logo>
      <img src={logoLeves} alt="logo leves" />
    </Logo>
    <GlobalStyle />
  </Container>
);

export default Initial;
