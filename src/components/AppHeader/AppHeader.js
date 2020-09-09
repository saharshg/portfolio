import {
  Box,
  Button,
  IconButton,
  Switch,
  Typography,
  useMediaQuery,
} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import { default as React, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { menuOptions } from '../../constants/menuOption';
import { AppContext } from '../../Context/context';
import AppMenu from '../AppMenu/AppMenu';

const useStyles = makeStyles((theme) => ({
  appBar: {
    boxShadow: 'none',
  },
  title: {
    marginLeft: '15px',
    fontFamily: 'Helvetica Neue',
    cursor: 'pointer',
  },
  avatar: {
    marginTop: theme.spacing(2),
    height: theme.spacing(10),
    width: theme.spacing(10),
    marginRight: 0,
    cursor: 'pointer',
  },
}));

const AppHeader = () => {
  const { appState, dispatch } = useContext(AppContext);
  const { mode } = appState;
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down('sm'));
  const history = useHistory();
  const classes = useStyles({ mode });
  const [openMenu, setOpenMenu] = useState(false);

  const handleTheme = () =>
    dispatch({ type: 'SET_MODE', mode: mode === 'light' ? 'dark' : 'light' });

  const toggleMenu = () => setOpenMenu(!openMenu);

  return (
    <>
      <AppBar
        position='static'
        id='back-to-top-anchor'
        className={classes.appBar}
      >
        <Toolbar
          style={{
            flexGrow: 1,
            width: '100%',
            justifyContent: 'space-between',
          }}
        >
          <Switch
            checked={mode === 'dark'}
            onChange={handleTheme}
            name='mode'
            inputProps={{ 'aria-label': 'change mode' }}
          />

          <Box style={{ display: 'flex' }}>
            {sm ? (
              <IconButton
                edge='start'
                color='inherit'
                aria-label='menu'
                onClick={toggleMenu}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              menuOptions.map(({ title, link }) => {
                if (title !== menuOptions[0].title) {
                  return (
                    <Button
                      style={{ textTransform: 'none' }}
                      color='inherit'
                      key={title}
                      onClick={() => history.push(link)}
                    >
                      {title}
                    </Button>
                  );
                }

                return null;
              })
            )}
            {!sm && (
              <Typography
                variant='h6'
                onClick={() => history.push('/')}
                className={classes.title}
                color='secondary'
              >
                SG
              </Typography>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <AppMenu
        toggleMenu={toggleMenu}
        openMenu={openMenu}
        mode={mode}
        handleTheme={handleTheme}
      />
    </>
  );
};

export default AppHeader;
