import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Typo from '../components/Typo';
import GridBox from '../components/GridBox';
import GridImg from '../components/GridImg';
import ItemLink from '../components/ItemLink';

import press from '../assets/tools/cylinder_press.jpg';
import vim from '../assets/tools/vim.svg';
import js from '../assets/tools/js.png';
import ts from '../assets/tools/ts.svg';
import react from '../assets/tools/react.svg';
import d3 from '../assets/tools/d3.svg';
import nodejs from '../assets/tools/nodejs.svg';
import python from '../assets/tools/python.svg';
import scikitlearn from '../assets/tools/scikitlearn.svg';
import hf from '../assets/tools/hf.svg';
import tf from '../assets/tools/tf.svg';
import sbert from '../assets/tools/sbert.png';
import networkx from '../assets/tools/networkx.svg';
import cpp from '../assets/tools/cpp.svg';
import of from '../assets/tools/of.png';
import processing from '../assets/tools/processing.svg';
import webgl from '../assets/tools/webgl.svg';
import opengl from '../assets/tools/opengl.svg';
import opengles from '../assets/tools/opengles.svg';
import opencv from '../assets/tools/opencv.svg';
import rgbd from '../assets/tools/rgbd.png';
import openkinect from '../assets/tools/openkinect.svg';
import openni from '../assets/tools/openni.png';

const tools = [
  [
    {
      src: vim,
      link: '//www.vim.org/',
    },
    {
      src: js,
      link: '//developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
      src: ts,
      link: '//www.typescriptlang.org/',
    },
    {
      src: react,
      link: '//react.dev/',
    },
    {
      src: d3,
      link: '//d3js.org/',
    },
    {
      src: nodejs,
      link: '//nodejs.org/',
    },
  ],
  [
    {
      src: python,
      link: '//www.python.org/',
    },
    {
      src: scikitlearn,
      link: '//scikit-learn.org/',
    },
    {
      src: hf,
      link: '//huggingface.co/',
    },
    {
      src: tf,
      link: '//www.tensorflow.org/',
    },
    {
      src: sbert,
      link: '//sbert.net/',
    },
    {
      src: networkx,
      link: '//networkx.org/',
    },
  ],
  [
    {
      src: cpp,
      link: '//en.wikipedia.org/wiki/C%2B%2B',
    },
    {
      src: of,
      link: '//openframeworks.cc/',
    },
    {
      src: processing,
      link: '//processing.org/',
    },
  //],
  //[
    {
      src: webgl,
      link: '//www.khronos.org/webgl/',
    },
    {
      src: opengl,
      link: '//www.opengl.org/',
    },
    {
      src: opengles,
      link: '//www.khronos.org/opengles/',
    },
  ],
  [
    {
      src: opencv,
      link: '//opencv.org/',
    },
    {
      src: rgbd,
    },
    {
      src: openkinect,
      link: '//openkinect.org/',
    },
    {
      src: openni,
      link: '//github.com/OpenNI/',
    },
  ],
];

export default () => <>

  <Typo variant="h3" gutterBottom>
    Tools 
  </Typo>

  <Box sx={{
    display: 'flex',
    //justifyContent: 'center',
    marginLeft: {
      xs: 0,
      sm: '60px',
    },
  }}>
    <img
      src={press}
      style={{
        maxWidth: '600px', 
        width: '100%',
        margin: '30px 0',
      }}
    />
  </Box>

  {tools.map(d =>
    <GridBox sx={{
      maxWidth: '600px',
      marginLeft: {
        xs: 0,
        sm: '60px',
      },
    }}>
      {d.map(({ src, link }) =>
        <Grid item xs={3} sm={2} sx={{
          display: 'flex',
          alignItems: 'center',
        }}>
          <ItemLink link={link}>
            <GridImg src={src} />
          </ItemLink>
        </Grid>
      )}
    </GridBox>
  )}

</>

