import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Radio, { RadioProps } from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  icon: {
    borderRadius: '50%',
    width: 16,
    height: 16,
    boxShadow:
      'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage:
      'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5',
    },
  },
  checkedIcon: {
    backgroundColor: '#137cbd',
    backgroundImage:
      'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#106ba3',
    },
  },
  colorLegend: {
    color: '#FAFAFA',
    margin: '4% 0',
    '&.MuiFormLabel-root.Mui-focused': {
      color: '#FFF',
    },
  },
  groupRadio: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  container: {
    margin: '0px 16px 16px 16px',
    width: '54%',
  },
  div: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// Inspired by blueprintjs
function StyledRadio(props: RadioProps) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}
interface Props {
  question: string;
}

const App: React.FC<Props> = ({ question }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.div}>
      <FormControl component="fieldset" className={classes.container}>
        <FormLabel component="p" className={classes.colorLegend}>
          {question}
        </FormLabel>
        <RadioGroup
          defaultValue=""
          aria-label="question"
          name="customized-radios"
          className={classes.groupRadio}
        >
          <FormControlLabel value="sim" control={<StyledRadio />} label="sim" />
          <FormControlLabel value="não" control={<StyledRadio />} label="não" />
        </RadioGroup>
      </FormControl>
    </Grid>
  );
};

export default App;
