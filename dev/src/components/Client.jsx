import React from 'react';
import Box from '@mui/material/Box';
import Typo from '../components/Typo';
import ItemLink from '../components/ItemLink';

export default ({ logo, sx, link, title = 'Client' }) =>
  <Box sx={{
    display: 'flex',
    marginBottom: '20px',
    ...(sx || {}),
  }}>
    <Typo variant='body2' gutterBottom sx={{
      height: '20px',
      marginRight: '16px',
    }}>
      — {title}
    </Typo>
    <ItemLink link={link}>
      <img
        src={logo}
        style={{
          height: '20px', 
        }}
      />
    </ItemLink>
  </Box>

