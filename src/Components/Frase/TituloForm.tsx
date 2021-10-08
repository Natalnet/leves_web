import { createStyles, makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles(() =>
  createStyles({
    h1: {
      marginTop: '1.5em',
      color: '#FFF',
      fontSize: '2em',
      textTransform: 'uppercase',
      textAlign: 'center',
    },
  }),
);

interface Props {
  frase: string;
}
const App: React.FC<Props> = ({ frase }: Props) => {
  const classes = useStyles();
  return (
    <>
      <h1 className={classes.h1}>{frase}</h1>
    </>
  );
};
export default App;
