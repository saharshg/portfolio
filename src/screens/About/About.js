import { Box, Link, makeStyles, Typography, useTheme } from '@material-ui/core';
import React from 'react';
import colors from '../../constants/colors';
import Blogs from '../Blogs/Blogs';
import Contact from './Contact';
import Intro from './Intro';

const useStyles = makeStyles({
  about: {
    '& a:link': {
      color: colors.light,
    },
    '& a:visited': {
      color: 'orangered',
    },
  },
});

const About = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Box className={classes.about} pt={theme.spacing(1)}>
      <Intro />
      <Blogs />

      <Box mt={5}>
        <Typography gutterBottom variant='h5'>
          About
        </Typography>
        <Typography gutterBottom paragraph>
          I'm a software engineer from Indore, currently living in Mumbai,
          India. I've written code for IDFC First Bank, Xebia IT Architects and
          Systango Technologies.
        </Typography>
        <Typography gutterBottom paragraph>
          I've built web and mobile apps under various domains including
          Banking, Real-estate, E-commerce, CRM systems, Accouting/Finance, etc.
          focused mainly on UI Development using{' '}
          <Link target='_blank' href='https://reactjs.org/'>
            React
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
          </Link>
          .
        </Typography>
      </Box>

      <Contact />
    </Box>
  );
};
export default About;
