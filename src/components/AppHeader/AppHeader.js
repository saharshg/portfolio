import { Switch } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { default as React, useContext } from 'react';
import { AppContext } from '../../Context/context';

const useStyles = makeStyles({
  appBar: {
    // backgroundColor: theme.palette.background.default,
    // color: theme.palette.primary.main,
    boxShadow: 'none',
  },
  title: {
    marginLeft: '15px',
    fontFamily: 'Helvetica Neue',
    cursor: 'pointer',
  },
  // avatar: {
  //   height: theme.spacing(7),
  //   width: theme.spacing(7),
  //   marginRight: 0,
  //   cursor: 'pointer',
  // },
});

const AppHeader = () => {
  const { appState, dispatch } = useContext(AppContext);
  const { mode } = appState;
  // const theme = useTheme();
  // const sm = useMediaQuery(theme.breakpoints.up('sm'));

  const classes = useStyles({ mode });
  // const navigationOptions = [
  //   { name: 'Blogs', key: 'blogs', onClick: () => {} },
  //   { name: 'About', key: 'about', onClick: () => {} },
  // ];

  const handleTheme = () =>
    dispatch({ type: 'SET_MODE', mode: mode === 'light' ? 'dark' : 'light' });

  return (
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
        {/* <div
          title='Saharsh Goyal'
          // onClick={() => history.push('/')}
          // style={{
          //   display: 'flex',
          //   alignItems: 'center',
          //   justifyContent: 'space-between',
          // }}
        > */}
        {/* <Avatar
            alt='Saharsh Goyal'
            src='/images/photo.png'
            className={classes.avatar}
          /> */}
        <Typography variant='h6' className={classes.title}>
          SG
        </Typography>
        {/* </div> */}

        {/* {!sm ? (
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <Menu />
          </IconButton>
        ) : (
          <div>
            {navigationOptions.map(({ key, name, onClick }) => (
              <Button
                // variant={location.pathname.includes(key) ? 'outlined' : 'text'}
                style={{ textTransform: 'none' }}
                color='inherit'
                key={key}
                onClick={onClick}
              >
                {name}
              </Button>
            ))} */}
        <Switch
          checked={mode === 'dark'}
          onChange={handleTheme}
          name='mode'
          inputProps={{ 'aria-label': 'change mode' }}
        />
        {/* </div>
        )} */}
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
