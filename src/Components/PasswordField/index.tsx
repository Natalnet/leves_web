import React from 'react';
import clsx from 'clsx';
import {
  createStyles,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  makeStyles,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { useField } from '@unform/core';
import { ContentPassword } from './style';

interface Props {
  name: string;
  className?: string;
  label: string;
  width: string;
}

const PasswordField: React.FC<Props> = ({ name, className, label, width }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const useStyles = makeStyles(() =>
    createStyles({
      textField: {
        width,
      },
    }),
  );

  // Para usar o css do Material-ui
  const classes = useStyles();
  const inputRef = React.useRef(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { fieldName, defaultValue, error, registerField } = useField(name);

  React.useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);
  // Para o botão de mostrar a senha
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <ContentPassword className={className || ''}>
      <Grid container direction="row" justify="center" alignItems="center">
        <FormControl className={clsx(classes.textField)}>
          <InputLabel htmlFor="standard-adornment-password">{label}</InputLabel>
          <Input
            inputRef={inputRef}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </Grid>
    </ContentPassword>
  );
};

export default PasswordField;
