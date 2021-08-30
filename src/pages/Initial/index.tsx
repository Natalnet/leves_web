import React from 'react';
import { useAuth } from '../../hooks/AuthContext';

const Home: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <>
      <h1>Página de Home</h1>
      <button type="submit" onClick={signOut}>
        sair
      </button>
    </>
  );
};

export default Home;
