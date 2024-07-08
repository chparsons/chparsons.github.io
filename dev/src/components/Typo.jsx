import React from 'react';
import Typography from '@mui/material/Typography';

export default ({ children, sx, ...props }) =>
  <Typography
    component='div' 
    sx={{
      ...(sx || {}),
      fontWeight: 'light',
    }}
    {...props}
  >
    {children}
  </Typography>

