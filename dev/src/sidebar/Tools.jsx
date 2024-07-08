import React from 'react';
import Grid from '@mui/material/Grid';

import Typo from '../components/Typo';
import GridBox from '../components/GridBox';
import GridImg from '../components/GridImg';

import about_img from '../assets/about.jpg';

export default () => <>

  <Typo variant="h3" gutterBottom>
    Tools 
  </Typo>

  <GridBox>

    <Grid item sm={12} md={4}>
      <GridImg src={about_img} />
    </Grid>

  </GridBox>

</>

