import React from 'react';
import Grid from '@mui/material/Grid';

import Typo from '../../components/Typo';
import Tools from '../../components/Tools';
import Client from '../../components/Client';
import ItemLink from '../../components/ItemLink';
import GridBox from '../../components/GridBox';
import GridImg from '../../components/GridImg';
import ExploreProject from '../../components/ExploreProject';
import external_links from '../../config/external_links';

import ch_logo from '../../assets/logos/crimson.png';
import embeddings_img from '../../assets/embeddings/embeddings.png';

import Text from './Text';
import Kepler from './Kepler';

const tools = [
  {
    label: 'd3',
    link: '//d3js.org/',
  },
  {
    label: 'python',
    link: '//python.org/',
  },
  {
    label: 'tensorflow',
    link: '//www.tensorflow.org/'
  },
  {
    label: 'umap',
    link: '//umap-learn.readthedocs.io/'
  },
  {
    label: 'kepler mapper',
    link: '//kepler-mapper.scikit-tda.org/',
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
    label: 'flask',
    link: '//flask.palletsprojects.com/',
  },
];

export default () => <>
  <Typo variant='h3' gutterBottom>
    Embeddings Visualization
  </Typo>

  <Tools tools={tools} />
  <Client logo={ch_logo} />

  <GridBox sx={{
    marginBottom: '60px',
  }}>

    <Grid item sm={12} md={6}>
      <ItemLink link={external_links.embeddings}>
        <GridImg
          src={embeddings_img}
          title='Explore project'
        /> 
      </ItemLink>
      <ExploreProject
        link={external_links.embeddings}
        sx={{ marginLeft: '20px' }}
      />
    </Grid>

    <Grid item sm={12} md={6} >
      <Text />
    </Grid>

  </GridBox>

  <Kepler />
</>

