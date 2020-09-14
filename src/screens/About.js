import { Box, Link, Typography } from '@material-ui/core';
import React from 'react';

const About = () => {
  return (
    <Box>
      <Typography gutterBottom variant='h5' color='secondary'>
        About
      </Typography>
      <Typography gutterBottom paragraph>
        I'm a Computer Science Engineer from Indore, currently working as
        Consultant for IDFC FIRST Bank Mumbai, India. I've written code for
        Xebia IT Architects and Systango Technologies.
      </Typography>
      <Typography gutterBottom paragraph>
        I've built web and mobile apps under various domains including Banking,
        Real Estate, E-Commerce, CRM systems, Accouting/Finance, focused mainly
        on Frontend Development using{' '}
        <Link target='_blank' href='https://reactjs.org/'>
          React
        </Link>
        ,{' '}
        <Link target='_blank' href='https://reactnative.dev/'>
          React Native
        </Link>{' '}
        and{' '}
        <Link target='_blank' href='https://github.com/getify/You-Dont-Know-JS'>
          Javascript
        </Link>
        .
      </Typography>
    </Box>
  );
};
export default About;
