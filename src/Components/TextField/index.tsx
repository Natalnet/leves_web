import {
  createStyles,
  FormControl,
  FormHelperText,
  Grid,
  makeStyles,
  TextField,
} from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import { useField } from '@unform/core';
import { ContentText } from './style';

interface Props {
  name: string;
  label: string;
  width: string;
}

const TextFields: React.FC<Props> = ({ name, label, width }) => {
  const useStyles = makeStyles(() =>
    createStyles({
      textField: {
        width,
      },
    }),
  );
  const classes = useStyles();
  const inputRef = React.useRef();
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
    <ContentText>
      <Grid container direction="row" justify="center" alignItems="center">
        <FormControl className={clsx(classes.textField)}>
          <TextField
            error={!!error}
            inputRef={inputRef}
            label={label}
            multiline
            rowsMax={4}
          />
          <FormHelperText id="component-error-text">{error}</FormHelperText>
        </FormControl>
      </Grid>
    </ContentText>
  );
};
export default TextFields;
