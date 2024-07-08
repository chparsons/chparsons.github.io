import React from 'react';
import Grid from '@mui/material/Grid';

import Typo from '../../components/Typo';
import Tools from '../../components/Tools';
import Client from '../../components/Client';
import GridBox from '../../components/GridBox';

import ch_logo from '../../assets/logos/crimson.png';
import video1 from '../../assets/image_analysis/image_analysis_1.mov';
import video2 from '../../assets/image_analysis/image_analysis_2.mov';
import video3 from '../../assets/image_analysis/image_analysis_3.mov';

const tools = [
  {
    label: 'd3',
    link: '//d3js.org/',
  },
  {
    label: 'physics',
    link: '//d3js.org/d3-force/',
  },
  {
    label: 'canvas',
    link: '//developer.mozilla.org/en-US/docs/Web/API/Canvas_API',
  },
  {
    label: 'glove word embeddings',
    link: '//nlp.stanford.edu/projects/glove/',
  },
];

export default () => <>
  <Typo variant='h3' gutterBottom>
    Image Analysis
  </Typo>

  <Tools tools={tools} />
  <Client logo={ch_logo} />

  <Typo variant='h6' gutterBottom sx={{
    marginTop: '40px',
  }}>
    Exploratory UI for AI image classification
  </Typo>

  <GridBox>

    <Grid item sm={12}>
      <video controls style={{
        maxWidth: '640px',
        width: '100%',
        objectFit: 'cover',
        objectPosition: 'top',
      }}>
        <source src={video3} type="video/mp4" />
      </video> 
    </Grid>

    <Grid item sm={12}>
      <video controls style={{
        height: '89.5%',
        maxWidth: '640px',
        width: '100%',
        objectFit: 'cover',
        objectPosition: 'top',
      }}>
        <source src={video1} type="video/mp4" />
      </video> 
    </Grid>

    <Grid item sm={12}>
      <video controls style={{
        height: '89.5%',
        maxWidth: '640px',
        width: '100%',
        objectFit: 'cover',
        objectPosition: 'top',
      }}>
        <source src={video2} type="video/mp4" />
      </video> 
    </Grid>

  </GridBox>

</>

