import {
  createStyles,
  FormControl,
  Grid,
  makeStyles,
  TextField,
} from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import { ContentText } from './style';

interface Props {
  login: string;
  label: string;
  width: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextFields: React.FC<Props> = ({ login, label, width, handleChange }) => {
  const useStyles = makeStyles(() =>
    createStyles({
      textField: {
        width,
      },
    }),
  );
  const classes = useStyles();
  return (
    <ContentText>
      <Grid container direction="row" justify="center" alignItems="center">
        <FormControl className={clsx(classes.textField)}>
          <TextField
            label={label}
            multiline
            rowsMax={4}
            value={login}
            onChange={handleChange}
          />
        </FormControl>
      </Grid>
    </ContentText>
  );
};
export default TextFields;
