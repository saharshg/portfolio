import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Helmet } from 'react-helmet';
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
  const { title, modifiedAt, slug, featureImage, url, hashtags } = blogsMapping[
    blog
  ];
  return (
    <Box>
      <Helmet>
        <title>{title}</title>
        <meta name='title' content={title} />
        <meta name='description' content={slug} />
        <meta property='og:type' content='website' />
        <meta property='og:url' content={url} />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={slug} />
        <meta property='og:image' content={featureImage.src} />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='628' />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content={url} />
        <meta property='twitter:title' content={title} />
        <meta property='twitter:description' content={slug} />
        <meta property='twitter:image' content={featureImage.src} />
      </Helmet>
      {blogsMapping[blog].component}
      <Box className={classes.blogSharing}>
        <Grid item>
          <Typography color='secondary'>{modifiedAt}</Typography>
        </Grid>
        <Grid item sm={4} className={classes.shareButtons}>
          <TwitterShareButton url={url} title={title} hashtags={hashtags}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <LinkedinShareButton
            url={url}
            title={title}
            summary={slug}
            source={url}
          >
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
          <FacebookShareButton
            url={url}
            quote={`${title}\n${slug}`}
            hashtag={`#${hashtags[0]}`}
          >
            <FacebookIcon size={32} round={true} />
          </FacebookShareButton>
          <WhatsappShareButton
            url={url}
            title={title}
            separator={`:: ${slug} `}
          >
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
        </Grid>
      </Box>
    </Box>
  );
};

export default Blogs;
