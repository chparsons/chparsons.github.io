import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Typo from '../../components/Typo';
import Tools from '../../components/Tools';
import Quote from '../../components/Quote';
import Client from '../../components/Client';
import GridBox from '../../components/GridBox';
import GridImg from '../../components/GridImg';
import Youtube from '../../components/Youtube';

import rudni from '../../assets/logos/rudni.png';
import naturkundemuseum from '../../assets/logos/naturkundemuseum.jpg';
import header from '../../assets/cicadas/cicadas_2.png';
import img1 from '../../assets/cicadas/cicada_opening_03.jpg';
import img2 from '../../assets/cicadas/cicada_opening_04.jpg';
//import img3 from '../../assets/cicadas/cicada_opening_07.jpg';
import img4 from '../../assets/cicadas/cicada4.jpg';
import img5 from '../../assets/cicadas/cicada6.jpg';
import img6 from '../../assets/cicadas/cicada8.jpg';
import diag1 from '../../assets/cicadas/cicada_engine_01.png';
import diag2 from '../../assets/cicadas/cicada_engine_07.png';
import diag3 from '../../assets/cicadas/cicada_engine_09.png';
//import diag4 from '../../assets/cicadas/cicada_engine_10.png';

const tools = [
  {
    label: 'java',
  },
  {
    label: 'processing',
    link: '//processing.org/',
  },
  {
    label: 'arduino',
    link: '//www.arduino.cc/',
  },
];

const imgs = [
  img1,
  img2,
  //img3,
  img4,
  img5,
  img6,
  diag1,
  diag2,
  diag3,
  //diag4,
];

export default () => <>
  <Typo variant='h3' gutterBottom>
    Cicadas
  </Typo>

  <Tools
    tools={tools}
    github='//github.com/chparsons/cicadas'
  /> 

  <Client
    logo={rudni}
    link='//www.rudni.com/'
    sx={{ marginBottom: '0px' }}
  />

  <Client
    title='Commissioned by Museum Naturkunde, Halle (Saale) Germany'
    logo={naturkundemuseum}
    link='//www.naturkundemuseum.uni-halle.de/'
  /> 

  <Typo variant='h6' gutterBottom>
    Electromechanical Sound Installation
  </Typo>

  <img
    src={header}
    style={{
      maxWidth: '400px', 
      width: '100%',
      margin: '30px 0',
    }}
  />

  <Quote sx={{
    margin: '20px 0',
  }}>
    <div>How do they syncronize one another, and what aligns them to the cycle of day and night?</div>
    — Steven Strogatz (Sync)
  </Quote>

  <Quote sx={{
    margin: '20px 0',
  }}>
    <div>...our artificial cicada represents the genetically established mechanism, with thousands of years of evolution presented within a few minutes.</div>
    — Dr. Frank Steinheimer
  </Quote>

  <GridBox sx={{
    marginBottom: '60px',
  }}>

    <Grid item sm={12} md={6}>
      <Youtube id='I1PxHPMS0N8'/>
    </Grid>

    <Grid item xs={6}>
      <Typo variant='body1' gutterBottom>
    <strong>Cicadas</strong> is an electromechanical sound installation based on a musical agents system. It's inspired in cicadas sound generation, communication and synchronization system. It resembles a colony of electro-mechanical objects, which have the capacity to "sing" and communicate with each other, controlled by an agent-based system and a sensor network.
      </Typo>
    </Grid> 

  </GridBox>

  <GridBox>
    {imgs.map(img => 
      <Grid item xs={12} sm={4} md={3}>
        <GridImg src={img} /> 
      </Grid>
    )} 
  </GridBox>

</>

