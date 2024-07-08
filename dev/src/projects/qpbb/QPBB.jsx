import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Typo from '../../components/Typo';
import Tools from '../../components/Tools';
import Client from '../../components/Client';
import GridBox from '../../components/GridBox';
import GridImg from '../../components/GridImg';
import Youtube from '../../components/Youtube';

import logo from '../../assets/logos/gl.png';
import img1 from '../../assets/qpbb/qpbb1.jpg';
import img2 from '../../assets/qpbb/qpbb2.jpg';
import img3 from '../../assets/qpbb/qpbb3.jpg';
import img4 from '../../assets/qpbb/qpbb4.jpg';
import img5 from '../../assets/qpbb/qpbb5.jpg';
import img6 from '../../assets/qpbb/qpbb6.jpg';
import img7 from '../../assets/qpbb/qpbb7.jpg';
import img8 from '../../assets/qpbb/qpbb8.jpg';
import img9 from '../../assets/qpbb/qpbb9.jpg';
import img10 from '../../assets/qpbb/qpbb10.jpg';
import img11 from '../../assets/qpbb/qpbb11.jpg';
import img12 from '../../assets/qpbb/qpbb12.jpg';
import img13 from '../../assets/qpbb/qpbb13.jpg';

const tools = [
  {
    label: 'c++',
  },
  {
    label: 'openframeworks',
    link: '//openframeworks.cc',
  },
  {
    label: 'opengl',
    link: '//opengl.org/',
  },
  {
    label: 'opencl',
    link: '//www.khronos.org/opencl/',
  },
  {
    label: 'android',
    link: '//android.com',
  },
  {
    label: 'tilemill',
    link: '//tilemill-project.github.io/tilemill/',
  },
];

const imgs = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
];

export default () => <>
  <Typo variant='h3' gutterBottom>
    Projected Dataviz
  </Typo>

  <Tools tools={tools} /> 

  <Typo variant='h6' gutterBottom sx={{
    marginBottom: '30px',
  }}>
    — Experiment —
  </Typo>

  <Typo variant='body1' gutterBottom>

<p><strong>Scale model data visualization</strong> of environmental data.</p>

<p>
The project explores how data visualization relates to:
</p>

<div>
» tangible thinking
</div>

<div>
» collaboration
</div>

<div>
» parallel human-human interaction
</div>

<p>
Data from the petrochemical complex of Bahía Blanca, Argentina with measurements of effluents discharged on the water by plants. 

The map displays measurements at different points in time; deviations with respect to the legal limit; proportions of substances discharged within a time range selected by users.
</p>

  </Typo>

  <GridBox>

    <Grid item sm={12} md={4}>
      <Youtube id='_X8Kc3ONkco' />
    </Grid>

    <Grid item sm={12} md={4}>
      <Youtube id='TrvJ_Kl9bwQ' />
    </Grid>

    <Grid item sm={12} md={4}>
      <Client
        title='Built with'
        logo={logo}
        link='//garagelab.tumblr.com/'
      />
    </Grid>

  </GridBox> 

  <GridBox>
    {imgs.map(img => 
      <Grid item sm={12} md={4}>
        <GridImg src={img} /> 
      </Grid>
    )} 
  </GridBox>

</>

