import { Typography } from '@material-ui/core';
import { default as React } from 'react';
const Paragraph = (props) => {
  const { children, variant = 'body1' } = props;
  return (
    <Typography paragraph variant={variant} {...props}>
      {children}
    </Typography>
  );
};

export default Paragraph;
