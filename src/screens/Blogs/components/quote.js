import { Box, Typography } from '@material-ui/core';
import { default as React } from 'react';
const Quote = ({ children }) => {
  return (
    <Box
      style={{
        borderLeft: '5px solid darkviolet',
        paddingLeft: 15,
        fontStyle: 'italic',
      }}
      mt={5}
      mb={5}
    >
      <Typography variant='body1'>{children}</Typography>
    </Box>
  );
};

export default Quote;
