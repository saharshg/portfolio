import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  intro: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    height: theme.spacing(25),
    backgroundImage: 'url(/images/saharsh.svg)',
    backgroundSize: 'cover',
  },
}));

const Intro = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.intro}>
      <Grid item md={6} lg={4}>
        <div
          title='Saharsh Goyal'
          alt='Saharsh Goyal'
          src='/images/saharsh.svg'
          className={classes.avatar}
        />
      </Grid>
      <Grid item md={6} lg={8}>
        <Typography variant='h5'>
          Hi{' '}
          <span role='img' aria-label='hi'>
            👋
          </span>{' '}
          my name is Saharsh
        </Typography>
        <Typography variant='h6'>
          Thanks for stopping by! You can find my blogs on React, React Native,
          and Javascript
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Intro;
