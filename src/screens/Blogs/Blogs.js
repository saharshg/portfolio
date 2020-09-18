import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router-dom';
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';
import { blogsMapping } from '../../constants/blogsMapping';

const useStyles = makeStyles((theme) => ({
  blogSharing: {
    margin: '60px 0',
  },
  shareButtons: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '12px',
  },
}));

const Blogs = () => {
  const classes = useStyles();
  const { blog } = useParams();
  const shareUrl = `https://saharshgoyal.com/#/blogs/${blog}`;
  const title = blogsMapping[blog].title;
  const createdAt = blogsMapping[blog].createdAt;
  return (
    <Box>
      {blogsMapping[blog].component}
      <Box className={classes.blogSharing}>
        <Grid item>
          <Typography color='secondary'>{createdAt}</Typography>
        </Grid>
        <Grid item sm={4} className={classes.shareButtons}>
          <TwitterShareButton url={shareUrl} title={title}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <LinkedinShareButton url={shareUrl}>
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
          <FacebookShareButton url={shareUrl} quote={title}>
            <FacebookIcon size={32} round={true} />
          </FacebookShareButton>
          <WhatsappShareButton url={shareUrl} title={title} separator=':: '>
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
        </Grid>
      </Box>
    </Box>
  );
};

export default Blogs;
