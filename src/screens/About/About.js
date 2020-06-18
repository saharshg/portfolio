import { Box, Grid, Link, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import colors from '../../constants/colors';
import Blogs from '../Blogs/Blogs';

const useStyles = makeStyles({
  about: {
    '& a:link': {
      color: colors.light,
    },
    '& a:visited': {
      color: 'orangered',
    },
  },
  logo: {
    width: '20px',
    height: '20px',
  },
});

const About = () => {
  const classes = useStyles();
  return (
    <Grid item xs={12}>
      <Box pt={25} pr={1} pl={1} className={classes.about}>
        <Typography variant='h3'>
          Hi! I'm Saharsh{' '}
          <span role='img' aria-label="Hi, I'm Saharsh!">
            👋
          </span>
        </Typography>
        <Box pt={5}>
          <Typography variant='h5' gutterBottom paragraph>
            I'm a software engineer. I was born in 1995 and grew up in Indore,
            India. After graduating High School, I went to SVITS where I
            graduated with a Bachelor's degree in Computer Science Engineering.
          </Typography>
          <Typography variant='h5' gutterBottom paragraph>
            I've built web and mobile apps under various domains including
            Banking, Real-estate, E-commerce, CRM systems, Accouting/Finance,
            etc. focused mainly on UI Development using{' '}
            <Link target='_blank' href='https://reactjs.org/'>
              React
              <img
                src='/images/react-logo.svg'
                alt='react logo'
                className={classes.logo}
              />
            </Link>
            ,{' '}
            <Link target='_blank' href='https://reactnative.dev/'>
              React Native
            </Link>{' '}
            and{' '}
            <Link
              target='_blank'
              href='https://github.com/getify/You-Dont-Know-JS'
            >
              Javascript
              <img
                src='/images/js-logo.svg'
                alt='js logo'
                className={classes.logo}
              />
            </Link>
            .
          </Typography>
        </Box>
        <Blogs />
      </Box>
    </Grid>
  );
};
export default About;
