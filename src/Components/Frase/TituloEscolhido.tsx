import React from 'react';
import TituloForm from './TituloForm';

interface Props {
  page: number;
}
const App: React.FC<Props> = ({ page }) => {
  return (
    <>
      {page === 1 ? (
        <TituloForm frase="Vamos embarcar juntos numa jornada rumo ao autoconhecimento?" />
      ) : (
        ''
      )}
      {page === 2 ? (
        <TituloForm frase="Vamos começar pensando um pouco no seu trabalho" />
      ) : (
        ''
      )}
      {page >= 3 ? (
        <TituloForm frase="Responda as próximas questões com base nas dores e problemas que possam ter lhe incomodado nos últimos 30 dias." />
      ) : (
        ''
      )}
    </>
  );
};

export default App;
