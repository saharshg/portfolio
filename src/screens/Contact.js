import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import TwitterIcon from '@material-ui/icons/Twitter';
import { default as React } from 'react';

const useStyles = makeStyles((theme) => ({
  contact: {
    justifyContent: 'center',
    display: 'flex',
    color: theme.type === 'light' ? 'darkmagenta' : 'darkviolet',
  },
  links: {
    borderTop: '1px solid darkmagenta',
    display: 'flex',
    paddingTop: theme.spacing(1),
    justifyContent: 'space-evenly',
    borderTopLeftRadius: '100px',
    borderTopRightRadius: '100px',
  },
}));
const Contact = () => {
  const classes = useStyles();
  return (
    <Box mb={1}>
      <Typography
        className={classes.contact}
        variant='overline'
        display='block'
        gutterBottom
      >
        <span role='img' aria-label='heart'>
          Made with ❤️ by Saharsh Goyal
        </span>
      </Typography>
      <Grid container className={classes.links}>
        <Grid item>
          <a
            rel='noopener noreferrer'
            target='_blank'
            href='https://twitter.com/saharshg10?ref_src=twsrc%5Etfw'
            data-show-count='false'
          >
            <TwitterIcon color='secondary' />
          </a>
        </Grid>
        <Grid item>
          <a
            href='https://github.com/saharshg'
            rel='noopener noreferrer'
            target='_blank'
          >
            <GitHubIcon color='secondary' />
          </a>
        </Grid>

        <Grid item>
          <a
            href='https://www.linkedin.com/in/saharsh-goyal-22b1b4113/'
            rel='noopener noreferrer'
            target='_blank'
          >
            <LinkedInIcon color='secondary' />
          </a>
        </Grid>
        <Grid item>
          <a
            href='mailto:contact@saharshgoyal.com'
            rel='noopener noreferrer'
            target='_blank'
          >
            <MailIcon color='secondary' />
          </a>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
