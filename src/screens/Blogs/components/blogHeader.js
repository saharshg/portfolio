import { Box, Typography } from '@material-ui/core';
import { default as React } from 'react';
const BlogHeader = ({ title, featureImage: { src, credit, url } }) => {
  return (
    <Box
      mt={10}
      mb={10}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography
        gutterBottom
        variant='h4'
        style={{
          color: 'darkmagenta',
        }}
      >
        {title}
      </Typography>

      <Box>
        <img src={src} alt={credit} style={{ width: '100%' }} />
      </Box>

      <Typography gutterBottom>
        Photo by{' '}
        <a target='_blank' rel='noopener noreferrer' href={url}>
          {credit}
        </a>
      </Typography>
    </Box>
  );
};

export default BlogHeader;
