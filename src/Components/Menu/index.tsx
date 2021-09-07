import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  Grid,
  AppBar,
  Toolbar,
  IconButton,
  MenuItem,
  Fade,
  Menu,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useAuth } from '../../hooks/AuthContext';
import logoBarra from '../../assets/logoBarra.png';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
      color: '#BDBDBD',
      backgroundColor: '#FFF',
      borderRadius: '8px',
      border: '1px solid #BDBDBD',
      padding: '0px 8px 0px 8px',
    },
    color: {
      background:
        'linear-gradient(180deg, #FAFAFA 20.31%, #F1F1F1 60.94%, #EDEDED 75.52%, #EBEBEB 88.02%, #E4E2E5 100%);',
    },
    size: {
      width: '1.5em',
      height: '1.5em',
    },
    paper: {
      backgroundColor: 'transparent',
      border: 0,
      boxShadow: 'unset',
    },
  }),
);

const App: React.FC = () => {
  const classes = useStyles();
  const { signOut } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleToggleMenu = React.useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    },
    [],
  );
  const handleClose = React.useCallback(() => {
    setAnchorEl(null);
  }, []);
  return (
    <Grid container className={classes.root}>
      <AppBar position="static" className={classes.color}>
        <Toolbar variant="dense">
          <img src={logoBarra} alt="Logo leves" width="200px" />
          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
          >
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={handleToggleMenu}
            >
              <MenuIcon className={classes.size} />
            </IconButton>
          </Grid>
        </Toolbar>
        <Menu
          className={classes.paper}
          id="fade-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={signOut}>Sair</MenuItem>
        </Menu>
      </AppBar>
    </Grid>
  );
};

export default App;
