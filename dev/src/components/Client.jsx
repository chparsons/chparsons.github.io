import React from 'react';
import Box from '@mui/material/Box';
import Typo from '../components/Typo';
import ItemLink from '../components/ItemLink';

export default ({ logo, link, title = 'Client' }) =>
  <Box sx={{
    display: 'flex',
    marginBottom: '20px',
  }}>
    <Typo variant='body2' gutterBottom sx={{
      height: '20px',
      marginRight: '20px',
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

