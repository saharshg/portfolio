import {
  Box,
  createMuiTheme,
  Fab,
  Grid,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {
  default as React,
  lazy,
  Suspense,
  useContext,
  useEffect,
  useState,
} from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import AppHeader from './components/AppHeader/AppHeader';
import ScrollTop from './components/ScrollTop/ScrollTop';
import colors from './constants/colors';
import { AppContext } from './Context/context';
import Contact from './screens/Contact';
// const Home = lazy(() => import('./screens/Home/Home'));
const BlogList = lazy(() => import('./screens/Blogs/BlogList'));
const Blogs = lazy(() => import('./screens/Blogs/Blogs'));
// const About = lazy(() => import('./screens/About'));

const createTheme = (type) => {
  let color = '#000';
  if (type === 'light') {
    color = '#f0f8ff';
  }
  return createMuiTheme({
    palette: {
      primary: {
        main: color,
      },
      background: {
        default: color,
      },
      type,
    },
    typography: {
      fontSize: 16,
    },
  });
};

const useStyles = makeStyles({
  about: {
    '& a:link': {
      color: colors.light,
    },
    '& a:visited': {
      color: 'orangered',
    },
  },
  body: {
    position: 'relative',
    minHeight: '100vh',
  },
  content: {
    justifyContent: 'center',
    paddingBottom: '2rem',
  },
  footer: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
  },
});

const App = () => {
  const classes = useStyles();
  const { appState } = useContext(AppContext);
  const { mode } = appState;

  const [theme, setTheme] = useState(createTheme('light'));

  useEffect(() => {
    if (mode === 'light') {
      setTheme(createTheme('light'));
    } else {
      setTheme(createTheme('dark'));
    }
  }, [mode]);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box className={classes.body}>
          <AppHeader />

          <Grid container className={classes.content}>
            <Grid item xs={10} sm={8} md={6}>
              <Box className={classes.about}>
                <Suspense fallback={<div>Loading...</div>}>
                  <Switch>
                    {/* <Route path='/about'>
                      <About />
                    </Route> */}
                    <Route path='/:blog'>
                      <Blogs />
                    </Route>
                    <Route path='/'>
                      <BlogList />
                    </Route>
                    {/* <Route path='/'>
                      <Home />
                    </Route> */}
                  </Switch>
                </Suspense>
              </Box>
            </Grid>
          </Grid>

          <Box className={classes.footer}>
            <Contact />
          </Box>
        </Box>
        <ScrollTop>
          <Fab color='secondary' size='small' aria-label='scroll back to top'>
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </ThemeProvider>
    </Router>
  );
};

export default App;
