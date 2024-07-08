import React from 'react';
import Grid from '@mui/material/Grid';

import Typo from '../../components/Typo';
import Tools from '../../components/Tools';
import GridBox from '../../components/GridBox';
import Quote from '../../components/Quote';
import Youtube from '../../components/Youtube';

import intro from '../../assets/camara_lucida/cml_intro.jpg';
import calib from '../../assets/camara_lucida/calib.png';
import piksel from '../../assets/camara_lucida/piksel.jpg';

const tools = [
  {
    label: 'c++',
  },
  {
    label: 'openframeworks',
    link: '//openframeworks.cc/',
  },
  {
    label: 'openkinect',
    link: '//openkinect.org/',
  },
];

export default () => <>
  <Typo variant='h3' gutterBottom>
    Camara Lucida
  </Typo>

  <Tools tools={tools} />

  <Typo variant='h6' gutterBottom>
    AR Projection mapping research
  </Typo>

  <Typo variant='body1' gutterBottom>

Open-source software toolkit to make digital artifacts based on real-time projection mapping on physical objects.

It uses a 3D Camera-Projector system with a RGBD camera (a Kinect) to build a 3D representation of the scene and project graphics on top of physical objects in real-time.

  </Typo>

  <img
    src={intro}
    style={{
      maxWidth: '600px', 
      width: '100%',
      margin: '30px 0',
    }}
  />

  <Quote sx={{
    marginBottom: '40px',
  }}>
<div>"I thought I only saw and heard (...)</div>
<div>that it was just a reflector of images,</div>
<div>a blank folding screen</div>
<div>on which reality projected colors and light</div>
<div>instead of shadows..."</div>
— Fernando Pessoa
  </Quote>

  <Typo variant='body1' gutterBottom>
Built by in collaboration with <a href="//www.informatik.uni-trier.de/~ley/pers/hd/t/Tepper:Mariano.html" target="_blank">Mariano Tepper</a>
  </Typo>

  <Typo variant='h6' gutterBottom>
    Calibration module:
  </Typo>

  <Typo variant='body1' gutterBottom>
  <a href="//github.com/chparsons/rgbdemo" target="_blank">RGBDemo</a> — based on the open-source projects RGBDemo by Nicolas Burrus and OpenCV. It calibrates the projector-camera system and saves the data for further usage.
  </Typo>

  <Typo variant='h6' gutterBottom>
    Render module:
  </Typo>

  <Typo variant='body1' gutterBottom>
  <a href="//github.com/chparsons/ofxCamaraLucida" target="_blank">ofxCamaraLucida</a> — openframeworks addon: renders graphics from the projector viewpoint using the projector device parameters extracted from the calibration.
  </Typo> 


  <GridBox>

    <Grid item sm={12} md={4}>
      <Youtube id='GW-c7QrVXVA' />
    </Grid>

    <Grid item sm={12} md={4}>
      <Youtube id='Bmi-thEfoFI' />
    </Grid>

    <Grid item sm={12} md={4}>
      <Youtube id='wVAxEYrtsBA' />
    </Grid>

  </GridBox>

  <Typo variant='h6' gutterBottom>
    Calibration process:
  </Typo>

  <img
    src={calib}
    style={{
      maxWidth: '500px', 
      width: '100%',
      margin: '30px 0',
    }}
  />

  <Typo variant='h6' gutterBottom>
    Presentation at <a href="https://www.piksel.no/p11/presentations11#Parsons" target="_blank">Piksel '11</a>
  </Typo>

  <Typo variant='body1' gutterBottom>
Piksel is an annual event for artists and developers working with free and open source software, hardware and art. Part workshop, part festival, it is organised in Bergen, Norway, and involves participants from more than a dozen countries exchanging ideas, coding, presenting art and software projects, doing workshops, performances and discussions on the aesthetics and politics of free and open source software.
  </Typo>

  <a href="https://www.piksel.no/p11/presentations11#Parsons" target="_blank">
    <img
      src={piksel}
      style={{
        maxWidth: '500px', 
        width: '100%',
        margin: '30px 0',
      }}
    />
  </a>

</>

