import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Typo from '../../components/Typo';
import Tools from '../../components/Tools';
import Client from '../../components/Client';
import GridBox from '../../components/GridBox';
import GridImg from '../../components/GridImg';
import ExploreProject from '../../components/ExploreProject';
import external_links from '../../config/external_links';

import bw_logo from '../../assets/logos/brandwatch.svg';
import moonplot_img from '../../assets/moonplot/moonplot.png';
import outer_img from '../../assets/moonplot/outer.png';
import inner_img from '../../assets/moonplot/inner.png';
import layout_video from '../../assets/moonplot/layout.mov';

import Text from './Text';

const tools = [
  {
    label: 'd3',
    link: '//d3js.org/',
  },
  {
    label: 'physics',
    link: '//d3js.org/d3-force/',
  },
];

export default () => <>
  <Typo variant='h3' gutterBottom>
    Moon Plot
  </Typo>

  <Tools tools={tools} />
  <Client logo={bw_logo} link='//brandwatch.com' />

  <Text />

  <ExploreProject
    link={external_links.moonplot}
    sx={{ marginTop: '20px' }}
  />

  <GridBox>

    <Grid item sm={12} md={6}>
      <GridImg src={moonplot_img} /> 
    </Grid>

    <Grid item sm={12} md={3} >
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}>
      <GridImg src={outer_img} /> 
      <GridImg src={inner_img} /> 
      </Box>
    </Grid>

  </GridBox>

  <Typo variant='h6'>
    Layout techniques:
  </Typo>

  <GridBox sx={{
    marginBottom: '60px',
  }}>

    <Grid item sm={12} md={6}>
      <video controls width='100%'>
        <source src={layout_video} type="video/mp4" />
      </video>
    </Grid>

    <Grid item sm={12} md={6}>
      <Typo variant='body1'>
        <p>* Physics simulation</p>
        <p>* Collision detection</p>
        <p>* Voronoi tessellation</p>
      </Typo>
    </Grid>

  </GridBox> 

</>

