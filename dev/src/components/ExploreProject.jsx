import React from 'react';
import Button from '@mui/material/Button';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export default ({ link, sx }) =>
  <Button
    startIcon={<OpenInNewIcon />}
    onClick={() => {
      window.open(link, '_blank');
    }}
    sx={{
      color: 'darkcyan',
      ...(sx || {}),
    }}
  >
    Explore project
  </Button>

