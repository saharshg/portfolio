import { Typography } from '@material-ui/core';
import { default as React } from 'react';
const Paragraph = ({ children }) => {
  return (
    <Typography paragraph variant='body1'>
      {children}
    </Typography>
  );
};

export default Paragraph;
