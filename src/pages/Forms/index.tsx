import React, { useState, useCallback, useEffect } from 'react';
import { Divider } from '@material-ui/core';
import TituloForm from '../../Components/Frase/TituloForm';
import LogoUfrn from '../../Components/LogoUfrn';
import Part1 from './Part1';
import Part2 from './Part2';
import Part3 from './Part3';
import Part4 from './Part4';
import Part5 from './Part5';
import Part6 from './Part6';
import Part7 from './Part7';
import { Background, Container, Content } from './styles';

const Register: React.FC = () => {
  // const history = useHistory();
  const [page, setPage] = useState(1);
  const [click, setClick] = useState(false);
  const changePageLeft = useCallback(() => {
    setPage(page + 1);
    setClick(true);
    sessionStorage.setItem('pageForm1:leves', String(page));
  }, [page]);
  const changePageRight = useCallback(() => {
    setClick(true);
    setPage(page - 1);
    sessionStorage.setItem('pageForm1:leves', String(page));
  }, [page]);

  useEffect(() => {
    if (
      page === 1 &&
      sessionStorage.getItem('pageForm1:leves')?.startsWith('2') &&
      !click
    ) {
      setPage(Number(sessionStorage.getItem('pageForm1:leves')));
    }
  }, [page, click]);
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
      <Container>
        <Background>
          <Divider orientation="vertical" flexItem />
        </Background>
        <Content>
          {page === 1 ? <Part1 changePageLeft={changePageLeft} /> : ''}
          {page === 2 ? (
            <Part2
              changePageLeft={changePageLeft}
              changePageRight={changePageRight}
            />
          ) : (
            ''
          )}
          {page === 3 ? (
            <Part3
              changePageLeft={changePageLeft}
              changePageRight={changePageRight}
            />
          ) : (
            ''
          )}
          {page === 4 ? (
            <Part4
              changePageLeft={changePageLeft}
              changePageRight={changePageRight}
            />
          ) : (
            ''
          )}
          {page === 5 ? (
            <Part5
              changePageLeft={changePageLeft}
              changePageRight={changePageRight}
            />
          ) : (
            ''
          )}
          {page === 6 ? (
            <Part6
              changePageLeft={changePageLeft}
              changePageRight={changePageRight}
            />
          ) : (
            ''
          )}
          {page === 7 ? <Part7 changePageRight={changePageRight} /> : ''}
        </Content>
        <LogoUfrn />
      </Container>
    </>
  );
};

export default Register;
