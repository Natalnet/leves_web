import React from 'react';
import GlobalStyle, { Container, Rectangle, Logo } from './styles';
import logoLeves from '../../assets/logoleves.png';

const Initial: React.FC = () => (
  <Container>
    <Rectangle>
      <a href="#i">Cadastre-se</a>
      <button type="button">Entrar</button>
    </Rectangle>
    <Logo>
      <img src={logoLeves} alt="logo leves" />
    </Logo>
    <GlobalStyle />
  </Container>
);

export default Initial;
