import React from 'react';
import clsx from 'clsx';
import {
  createStyles,
  FormControl,
  FormHelperText,
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
  const { fieldName, error, registerField } = useField(name);

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
        <FormControl className={clsx(classes.textField)} error={!!error}>
          <InputLabel error={!!error} htmlFor="standard-adornment-password">
            {label}
          </InputLabel>
          <Input
            inputRef={inputRef}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  className={error ? 'error' : ''}
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
          <FormHelperText id="component-error-text">{error}</FormHelperText>
        </FormControl>
      </Grid>
    </ContentPassword>
  );
};

export default PasswordField;
