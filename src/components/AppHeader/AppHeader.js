import { IconButton, useMediaQuery } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Menu } from '@material-ui/icons';
import { default as React } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import colors from '../../constants/colors';

const useStyles = makeStyles((theme) => ({
  title: {
    marginLeft: '15px',
    fontFamily: 'Helvetica Neue',
  },
  avatar: {
    height: theme.spacing(7),
    width: theme.spacing(7),
    marginRight: 0,
  },
}));

const AppHeader = () => {
  const classes = useStyles();
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up('sm'));
  const history = useHistory();
  const location = useLocation();
  const navigationOptions = [
    { name: 'Blogs', key: 'blogs', onClick: () => history.push('/blogs') },
    { name: 'About', key: 'about', onClick: () => history.push('/about') },
  ];

  return (
    <div className={classes.root}>
      <AppBar
        position='absolute'
        id='back-to-top-anchor'
        style={{
          backgroundColor: colors.normal,
          minHeight: '100px',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Toolbar
          disableGutters
          style={{
            flexGrow: 1,
            width: '100%',
            justifyContent: 'space-evenly',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Avatar
              alt='Saharsh Goyal'
              src='/images/photo.jpg'
              className={classes.avatar}
            />
            <Typography variant='h6' className={classes.title}>
              Saharsh Goyal
            </Typography>
          </div>
          {!sm ? (
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
                  variant={
                    location.pathname.includes(key) ? 'outlined' : 'text'
                  }
                  style={{ textTransform: 'none' }}
                  color='inherit'
                  key={key}
                  onClick={onClick}
                >
                  {name}
                </Button>
              ))}
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppHeader;
