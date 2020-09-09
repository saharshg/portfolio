import { Typography } from '@material-ui/core';
import { default as React } from 'react';
const SubTitle = ({ children }) => {
  return (
    <Typography paragraph variant='body1' color='secondary'>
      {children}
    </Typography>
  );
};

export default SubTitle;
