import {
  Container,
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core';
import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import AppHeader from './components/AppHeader/AppHeader';
import About from './screens/About/About';
import Blogs from './screens/Blogs/Blogs';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: 'whitesmoke',
    height: '100%',
  },
}));

const theme = createMuiTheme({
  // typography: {
  //   fontFamily: 'Exo',
  //   fontWeightLight: 300,
  // },
});

export default () => {
  const classes = useStyles();
  return (
    <Router>
      <ThemeProvider theme={theme} className={classes.root}>
        <AppHeader />
        <Container maxWidth='md'>
          <Switch>
            <Route exact path='/blogs'>
              <Blogs />
            </Route>
            <Route exact path='/about'>
              <About />
            </Route>
            <Redirect exact from='/' to='about' />
          </Switch>
        </Container>
      </ThemeProvider>
    </Router>
  );
};
