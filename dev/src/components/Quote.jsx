import React from 'react';
import Typo from './Typo';

export default ({ children, sx, ...props }) =>
  <Typo variant='body1' gutterBottom sx={{
    color: '#777',
    paddingLeft: '16px',
    borderLeft: '1px #ddd solid',
    ...(sx || {}),
  }} {...props}>
    {children}
  </Typo>

