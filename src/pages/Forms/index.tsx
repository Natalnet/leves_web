import React, { useState, useCallback, useEffect } from 'react';
import { Divider } from '@material-ui/core';
import TituloEscolhido from '../../Components/Frase/TituloEscolhido';
import LogoUfrn from '../../Components/LogoUfrn';
import Form from '../../Components/Form';
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
      <TituloEscolhido page={page} />
      <Container>
        <Background>
          <Divider orientation="vertical" flexItem />
        </Background>
        <Content>
          <Form
            page={page}
            changePageLeft={changePageLeft}
            changePageRight={changePageRight}
          />
        </Content>
        <LogoUfrn />
      </Container>
    </>
  );
};

export default Register;
