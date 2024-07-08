import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Typo from '../../components/Typo';
import Tools from '../../components/Tools';
import GridBox from '../../components/GridBox';
import Youtube from '../../components/Youtube';

import diagram from '../../assets/afluentes/diagram.jpg';
import kinecthacks from '../../assets/afluentes/kinecthacks.jpg';

const tools = [
  {
    label: 'c++',
  },
  {
    label: 'openframeworks',
    link: '//openframeworks.cc',
  },
  {
    label: 'opencv',
    link: '//opencv.org/',
  },
  {
    label: 'opengl',
    link: '//opengl.org/',
  },
  {
    label: 'opencl',
    link: '//www.khronos.org/opencl/',
  },
];

export default () => <>
  <Typo variant='h3' gutterBottom>
    Afluentes
  </Typo>

  <Tools tools={tools} />

  <Typo variant='h6' gutterBottom sx={{
    marginBottom: '30px',
  }}>
    — Experiment —
  </Typo>

  <Typo variant='body1' gutterBottom>

<div>
Afluentes is an interactive toy, a <strong>sandbox</strong> where people can build their own landscapes.
</div>

<div>
A water flow that goes through the pathsways created by players turns the sandbox into a construction toy to make watercourses.
</div>

  </Typo>

    <GridBox>

    <Grid item sm={12} md={4}>
      <Youtube id='o1hAYKn1p8w' />
    </Grid>

    <Grid item sm={12} md={4}>
      <Youtube id='ZiWshZtpjs8' />
    </Grid>

    <Grid item sm={12} md={4}>
      <Youtube id='9lpzvsDKjhQ' />
    </Grid>

  </GridBox>

  <Typo variant='body1' gutterBottom>
    Diagram
  </Typo>

  <img
    src={diagram}
    style={{
      maxWidth: '500px', 
      width: '100%',
      marginBottom: '40px',
    }}
  />

  <Typo variant='h6' gutterBottom>
    Featured by KinectHacks
  </Typo>

  <Typo variant='body1' gutterBottom>
"You can create instant wonders with the land you’ve created! The Kinect Sand Landscapes Toy projects colorful visuals and worldy bodies to an actual patch of earth created by the user. This video by Christian Parsons displays how the Kinect’s camera is able to produce this interactive “sandbox”. In the video, the patch of earth is seen and then becomes lit up. Through the Kinect, the depth of the earth is detected and mountain ranges are formed as well as river beds that constantly move. The user then can change the earth by interacting with it personally the visuals change. Users can form new mountains and set the course of rivers to run. This interactive “God” mode immerses users into an experience of creation and majesty."
  </Typo>

  <img
    src={kinecthacks}
    style={{
      maxWidth: '500px', 
      width: '100%',
      margin: '40px 0',
    }}
  />

</>

