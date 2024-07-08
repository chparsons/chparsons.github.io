import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default ({ children, sx }) =>
  <Box sx={{
    flexGrow: 1,
    marginRight: '20px',
    marginTop: '40px',
    marginBottom: '40px',
    ...(sx || {}),
  }}>
    <Grid container spacing={3}> 
      {children}
    </Grid>
  </Box>


