import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './styles/globalStyle';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes /> {/* Os componentes são chamados no arquivo de rotas */}
    </BrowserRouter>
    {/* Um estilo aplicado em todas as páginas */}
    <GlobalStyle />
  </>
);

export default App;
