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
import { Helmet } from 'react-helmet';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import AppHeader from './components/AppHeader/AppHeader';
import ScrollTop from './components/ScrollTop/ScrollTop';
import colors from './constants/colors';
import { AppContext } from './Context/context';
import Contact from './screens/Contact';
const Home = lazy(() => import('./screens/Home/Home'));
const BlogList = lazy(() => import('./screens/Blogs/BlogList'));
const Blogs = lazy(() => import('./screens/Blogs/Blogs'));
const About = lazy(() => import('./screens/About'));

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
      <Helmet>
        {/* <!-- Primary Meta Tags --> */}
        <title>Saharsh Goyal</title>
        <meta name='title' content='Saharsh Goyal' />
        <meta
          name='description'
          content='I help people to grow their businesses with quality software.'
        />
        <meta
          name='keywords'
          content='saharsh goyal, portfolio, developer, software engineer, react, react-native, javascript'
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://saharshgoyal.com/' />
        <meta property='og:title' content='Saharsh Goyal' />
        <meta
          property='og:description'
          content='I help people to grow their businesses with quality software.'
        />
        <meta
          property='og:image'
          content='https://images.unsplash.com/photo-1489844097929-c8d5b91c456e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80'
        />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='628' />

        {/* <!-- Twitter --> */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://saharshgoyal.com/' />
        <meta property='twitter:title' content='Saharsh Goyal' />
        <meta
          property='twitter:description'
          content='I help people to grow their businesses with quality software.'
        />
        <meta
          property='twitter:image'
          content='https://images.unsplash.com/photo-1489844097929-c8d5b91c456e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80'
        />
      </Helmet>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box className={classes.body}>
          <AppHeader />

          <Grid container className={classes.content}>
            <Grid item xs={10} sm={8} md={6}>
              <Box className={classes.about}>
                <Suspense fallback={<div>Loading...</div>}>
                  <Switch>
                    <Route path='/about'>
                      <About />
                    </Route>
                    <Route path='/blogs/:blog'>
                      <Blogs />
                    </Route>
                    <Route path='/blogs'>
                      <BlogList />
                    </Route>
                    <Route path='/'>
                      <Home />
                    </Route>
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
