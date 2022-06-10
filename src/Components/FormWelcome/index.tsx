import React from 'react';
import Part1 from './Part1';
import Part2 from './Part2';
import Part3 from './Part3';

interface Props {
  page: string;
}
const App: React.FC<Props> = ({ page }) => {
  return (
    <>
      {page === '1' ? <Part1 /> : ''}
      {page === '2' ? <Part2 /> : ''}
      {page === '3' ? <Part3 /> : ''}
    </>
  );
};

export default App;
