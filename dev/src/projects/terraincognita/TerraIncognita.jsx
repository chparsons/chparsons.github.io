import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Typo from '../../components/Typo';
import Tools from '../../components/Tools';
import Quote from '../../components/Quote';
import GridBox from '../../components/GridBox';
import GridImg from '../../components/GridImg';
import Youtube from '../../components/Youtube';

import img1 from '../../assets/terraincognita/terra_incognita_1.jpg';
import img2 from '../../assets/terraincognita/terra_incognita_2.jpg';
import img3 from '../../assets/terraincognita/terra_incognita_3.jpg';

const tools = [
  {
    label: 'processing',
    link: '//processing.org',
  },
  {
    label: 'opengl',
    link: '//opengl.org/',
  },
  {
    label: 'computer vision',
    link: '//en.wikipedia.org/wiki/Computer_vision',
  },
];

const imgs = [
  img1,
  img2,
  img3,
];

export default () => <>
  <Typo variant='h3' gutterBottom>
    Terra Incognita
  </Typo>

  <Tools tools={tools} /> 

  <Quote sx={{
    marginBottom: '40px',
  }}>
<p>(...) whether it is some subtle and invisible matter that operates on the bodies, impelling them one against the other, or whether they are endowed with a hidden quality thanks to which they attract each other.</p>
<p>— Leonard Euler (1772)</p>
  </Quote>

  <GridBox>

    <Grid item sm={12} md={4}>
      <GridImg src={img1} /> 
    </Grid> 

    <Grid item sm={12} md={4}>
      <GridImg src={img2} /> 
    </Grid> 

    <Grid item sm={12} md={4}>
      <GridImg src={img3} /> 
    </Grid> 

  </GridBox> 

  <GridBox>

    <Grid item sm={12} md={4}>
      <Youtube id='DSkrvJG0iUI' />
    </Grid>

    <Grid item sm={12} md={4}>
      <Youtube id='NpLXa5hd4y4' />
    </Grid>

  </GridBox> 

  <Typo variant='h6' gutterBottom>
    Exhibitions
  </Typo>

  <Typo variant='body1' sx={{
    marginBottom: '40px',
  }}>

<p>» <a href="//espaciocultural.ciudaddemendoza.gob.ar/?page_id=202" target="_blank">2012 - Museum of Modern Art - Mendoza, Argentina</a> </p>

<p>» <a href="//x.com/vadfestival" target="_blank">2011 - VAD Festival - Girona, Spain</a> </p>

<p>» <a href="//castagninomacro.org" target="_blank">2011 - Castagnino Museum - Rosario, Argentina</a> </p>

<p>» <a href="//artsandculture.google.com/partner/fundacion-itau-argentina" target="_blank">2011 - Itau Foundation - Buenos Aires, Argentina</a> </p>

<p>» <a href="//www.cceba.org.ar/" target="_blank">2010 - CCEBA, Spanish cultural center in Buenos Aires, Argentina</a> </p>

<p>» <a href="//artxibo.arteleku.net/" target="_blank">2009 - Interactivos '09. Medialab Prado / Arteleku - Basque Country</a> </p>

  </Typo>

</>

