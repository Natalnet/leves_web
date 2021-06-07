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
import { ContentPassword } from './style';

interface Props {
  className?: string;
  label: string;
  width: string;
  password: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordField: React.FC<Props> = ({
  className,
  label,
  width,
  handleChange,
  password,
}) => {
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
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={handleChange}
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
