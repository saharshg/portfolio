import {
  Box,
  Grid,
  Link,
  makeStyles,
  Typography,
  useTheme,
} from '@material-ui/core';
import React from 'react';
import colors from '../../constants/colors';
import Blogs from '../Blogs/Blogs';

const useStyles = makeStyles((theme) => ({
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
  avatar: {
    height: theme.spacing(25),
  },
  intro: {
    justifyContent: 'center',
  },
}));

const About = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Box className={classes.about} pt={theme.spacing(1)}>
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
            Hi, I'm Saharsh Goyal. I help people grow their businesses by
            creating web and mobile apps.
          </Typography>
        </Grid>
      </Grid>
      <Blogs />
      <Box mt={5}>
        <Typography gutterBottom variant='h5'>
          About
        </Typography>
        <Typography gutterBottom paragraph>
          I'm a software engineer from Indore, currently living in Mumbai,
          India. I've written code for IDFC First Bank, Xebia IT
          Architects and Systango Technologies .
        </Typography>
        <Typography gutterBottom paragraph>
          I've built web and mobile apps under various domains including
          Banking, Real-estate, E-commerce, CRM systems, Accouting/Finance, etc.
          focused mainly on UI Development using{' '}
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

      <Box mt={5} mb={5}>
        <Typography gutterBottom variant='h5'>
          Contact
        </Typography>
        <Typography>
          E-mail:{' '}
          <a href='mailto:contact@saharshgoyal.com'>contact@saharshgoyal.com</a>
        </Typography>
      </Box>
    </Box>
  );
};
export default About;
