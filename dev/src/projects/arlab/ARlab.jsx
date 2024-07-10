import React from 'react';
import Box from '@mui/material/Box';
//import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import Typo from '../../components/Typo';
import Tools from '../../components/Tools';
import Client from '../../components/Client';
//import GridBox from '../../components/GridBox';
//import GridImg from '../../components/GridImg';
import Youtube from '../../components/Youtube';

import cceba from '../../assets/logos/cceba.jpg';
import img1 from '../../assets/arlab/arlab3.jpg';
import img2 from '../../assets/arlab/arlab7.jpg';
import img3 from '../../assets/arlab/arlab8.jpg';
import img4 from '../../assets/arlab/arlab9.jpg';
import img5 from '../../assets/arlab/arlab10.jpg';
import img6 from '../../assets/arlab/arlab11.jpg';

const tools = [
  {
    label: 'c++',
  },
  {
    label: 'ARToolKit',
    link: '//en.wikipedia.org/wiki/ARToolKit',
  },
];

const imgs = [
  img2,
  img3,
  img4,
  img5,
  img6,
  img1,
];

export default () => <>
  <Typo variant='h3' gutterBottom>
    AR Lab
  </Typo>

  <Tools tools={tools} /> 

  <Client
    logo={cceba}
    title='Developed in CCEBA MediaLab'
    link='//www.cceba.org.ar/'
  />

  <Typo variant='h6' gutterBottom>
    R&D — 3D Real-time Projection Mapping
  </Typo>

  <ImageList variant="masonry" cols={3} gap={8}>
    <ImageListItem key='_IL_GPi3BRE'>
      <Youtube id='_IL_GPi3BRE'/>
    </ImageListItem>
    {imgs.map(img => 
      <ImageListItem key={img}>
        <img src={img} />
      </ImageListItem>
    )}
  </ImageList>

</>

