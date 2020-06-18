import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { default as React } from 'react';
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
  // const theme = useTheme();
  // const sm = useMediaQuery(theme.breakpoints.up('sm'));
  // const history = useHistory();
  // const location = useLocation();
  // const navigationOptions = [
  //   { name: 'Blogs', key: 'blogs', onClick: () => history.push('/blogs') },
  //   { name: 'About', key: 'about', onClick: () => history.push('/about') },
  // ];

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

          {/* {navigationOptions.map(({ key, name, onClick }) => (
            <Button
              variant={location.pathname.includes(key) ? 'outlined' : 'text'}
              style={{ textTransform: 'none' }}
              color='inherit'
              key={key}
              onClick={onClick}
            >
              {name}
            </Button>
          ))} */}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppHeader;
