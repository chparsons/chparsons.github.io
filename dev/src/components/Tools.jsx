import React from 'react';
import Box from '@mui/material/Box';
import BuildIcon from '@mui/icons-material/Build';
import Chip from '@mui/material/Chip';

export default ({ tools }) =>
  <Box sx={{
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    flexWrap: 'wrap',
    marginBottom: '30px',
  }}>
    <BuildIcon sx={{ fontSize: 16 }} />
    {tools.map(d => 
      <Chip
        key={d.label}
        label={d.label}
        sx={{
          backgroundColor: 'rgba(0,0,0,0.05)',
          cursor: d.link ? 'pointer' : 'default',
        }}
        size="small"
        component={d.link && 'a'}
        href={d.link}
        target={d.link && '_blank'}
        title={d.link}
        clickable={!!d.link}
      /> )}
  </Box>
