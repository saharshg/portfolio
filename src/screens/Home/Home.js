import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import AppHeader from '../../components/AppHeader/AppHeader';
import About from '../About/About';

const useStyles = makeStyles({
  content: {
    justifyContent: 'center',
  },
});
const Home = () => {
  const classes = useStyles();
  return (
    <>
      <AppHeader />
      <Grid container className={classes.content}>
        <Grid item xs={8} md={6}>
          <About />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
