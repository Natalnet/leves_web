import { makeStyles } from '@material-ui/core';
import { createStyles } from '@material-ui/core/styles';
import { useField } from '@unform/core';
import React, { InputHTMLAttributes } from 'react';
import points from '../../assets/points.png';

const useStyles = makeStyles(() =>
  createStyles({
    input: {
      width: '32em',
      height: '1.8em',
      borderColor: 'white',
      borderRadius: '0.3em',
      padding: '0.1em',
      margin: '0 25% 0 0',
    },
    div: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '5% 0',
    },
    p: {
      width: '22em',
      textAlign: 'justify',
      lineHeight: '1em',
      margin: '1% 0',
      fontSize: '0.9em',
    },
    imgInput: {
      display: 'flex',
      flexDirection: 'row',
    },
    img: {
      backgroundColor: '#086f8b',
      width: '2.4em',
      border: '1px solid #086f8b',
      borderBottomLeftRadius: '0.2em',
      borderBottomRightRadius: '0.2em',
      transform: 'rotate(90deg)',
    },
  }),
);

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  question: string;
}
const App: React.FC<InputProps> = ({ name, question }) => {
  const inputRef = React.useRef(null);
  const classes = useStyles();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { fieldName, error, registerField } = useField(name);

  React.useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <div className={classes.div}>
      <p className={classes.p}>{question}</p>
      <div className={classes.imgInput}>
        <img className={classes.img} src={points} alt="points" />
        <input
          ref={inputRef}
          className={classes.input}
          type="text"
          name={name}
        />
      </div>
    </div>
  );
};

export default App;
