import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  intro: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    height: theme.spacing(25),
  },
}));

const Intro = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.intro}>
      <Grid item md={6} lg={4}>
        <img
          title='Saharsh Goyal'
          alt='Saharsh Goyal'
          src='/images/photo.png'
          className={classes.avatar}
        />
      </Grid>
      <Grid item md={6} lg={8}>
        <Typography variant='h5'>
          Hi, I'm Saharsh Goyal. I help people to grow their businesses with
          quality software.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Intro;
