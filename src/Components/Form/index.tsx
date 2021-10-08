import React from 'react';
import Part1 from './Part1';
import Part2 from './Part2';
import Part3 from './Part3';
import Part4 from './Part4';
import Part5 from './Part5';
import Part6 from './Part6';
import Part7 from './Part7';

interface Props {
  page: number;
  changePageLeft: () => void;
  changePageRight: () => void;
}
const App: React.FC<Props> = ({ page, changePageLeft, changePageRight }) => {
  return (
    <>
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
    </>
  );
};

export default App;
