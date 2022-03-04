import React from 'react';
import Part1 from './Part1';
import Part2 from './Part2';
import Part3 from './Part3';
import Part4 from './Part4';
import Part5 from './Part5';
import Part6 from './Part6';
import Part7 from './Part7';

interface Props {
  page: string;
}
const App: React.FC<Props> = ({ page }) => {
  return (
    <>
      {page === '1' ? <Part1 /> : ''}
      {page === '2' ? <Part2 /> : ''}
      {page === '3' ? <Part3 /> : ''}
      {page === '4' ? <Part4 /> : ''}
      {page === '5' ? <Part5 /> : ''}
      {page === '6' ? <Part6 /> : ''}
      {page === '7' ? <Part7 /> : ''}
    </>
  );
};

export default App;
