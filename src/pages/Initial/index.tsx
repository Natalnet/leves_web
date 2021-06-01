import React from 'react';
import { Link } from 'react-router-dom';
import GlobalStyle, { Container, Rectangle, Logo } from './styles';
import logoLeves from '../../assets/logoleves.png';

const Initial: React.FC = () => (
  <Container>
    <Rectangle>
      {/* a tag Link do react-router-dom vai redirecionar o usuário para as rotas registro e login */}
      <Link to="/register">
        <a href="#i">Cadastre-se</a>
      </Link>
      <Link to="login">
        <button type="button">Entrar</button>
      </Link>
    </Rectangle>
    <Logo>
      <img src={logoLeves} alt="logo leves" />
    </Logo>
    <GlobalStyle />
  </Container>
);

export default Initial;
