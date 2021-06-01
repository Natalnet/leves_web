import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes /> {/* Os componentes são chamados no arquivo de rotas */}
    </BrowserRouter>
  </>
);

export default App;
