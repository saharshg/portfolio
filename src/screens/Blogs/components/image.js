import { Box, Grid } from '@material-ui/core';
import { default as React } from 'react';
const Image = ({ src, alt }) => {
  return (
    <Grid item md={8}>
      <Box mb={5}>
        <img src={src} alt={alt} style={{ width: '100%' }} />
      </Box>
    </Grid>
  );
};

export default Image;
