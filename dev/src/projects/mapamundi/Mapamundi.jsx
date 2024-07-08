import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Typo from '../../components/Typo';
import Tools from '../../components/Tools';
import ItemLink from '../../components/ItemLink';
import GridBox from '../../components/GridBox';
import GridImg from '../../components/GridImg';
import ExploreProject from '../../components/ExploreProject';
import external_links from '../../config/external_links';

import wdvp_logo from '../../assets/mapamundi/wdvp_logo.svg';
import mapamundi_img from '../../assets/mapamundi/mapamundi.jpg';

import Text from './Text';

const tools = [
  {
    label: 'd3',
    link: '//d3js.org/',
  },
  {
    label: 'canvas',
    link: '//developer.mozilla.org/en-US/docs/Web/API/Canvas_API/',
  },
  {
    label: 'python',
    link: '//python.org/',
  },
  {
    label: 'kepler mapper',
    link: '//kepler-mapper.scikit-tda.org/',
  },
  {
    label: 'tsne',
    link: '//lvdmaaten.github.io/tsne/'
  },
  {
    label: 'dbscan',
    link: '//en.wikipedia.org/wiki/DBSCAN',
  },
  {
    label: 'scikit learn',
    link: '//scikit-learn.org/',
  },
  {
    label: 'pandas',
    link: '//pandas.pydata.org/',
  },
];

export default () => <>
  <Typo variant='h3' gutterBottom>
    Mapamundi
  </Typo>
  <Tools tools={tools} />

  <Typo variant='h6' gutterBottom>
    Awards:
  </Typo>

  <Box sx={{
    width: '200px',
    height: '80px',
    marginBottom: '30px',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: 'rgba(0,0,0,0.02)', 
    },
  }}>
    <ItemLink
      link='//informationisbeautiful.net/2019/winners-of-the-world-data-visualization-prize/'
    >
      <img
        src={wdvp_logo}
        title='World Data Visualization Prize'
        alt='World Data Visualization Prize'
        style={{
          width: '200px', 
        }}
      />
    </ItemLink>
  </Box>

  <GridBox sx={{
    marginBottom: '60px',
  }}>

    <Grid item sm={12} md={6}>
      <ItemLink link={external_links.mapamundi}>
        <GridImg
          src={mapamundi_img}
          title='Explore project'
        />
      </ItemLink>
      <ExploreProject link={external_links.mapamundi} />
    </Grid>

    <Grid item sm={12} md={6} >
      <Text />
    </Grid>

  </GridBox>
</>

