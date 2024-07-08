import React from 'react';
import Grid from '@mui/material/Grid';

import Typo from '../../components/Typo';
import GridBox from '../../components/GridBox';
import GridImg from '../../components/GridImg';

import project from '../../assets/embeddings/1_kepler_project.jpg';
import cover from '../../assets/embeddings/2_kepler_cover.jpg';
import cluster from '../../assets/embeddings/3_kepler_cluster.jpg';
import connect from '../../assets/embeddings/4_kepler_connect.jpg';

export default () => <>

<Typo variant='h6' gutterBottom sx={{
  marginTop: '30px',
}}>
Extracting a graph with Topological Data Analysis:
</Typo>

<GridBox sx={{
  marginBottom: '60px',
}}>

  <Grid item xs={12} sm={6} md={3}>
    <p>1. Project</p>
    <GridImg src={project} />
  </Grid>

  <Grid item xs={12} sm={6} md={3}>
    <p>2. Cover</p>
    <GridImg src={cover} />
  </Grid>

  <Grid item xs={12} sm={6} md={3}>
    <p>3. Cluster</p>
    <GridImg src={cluster} />
  </Grid>

  <Grid item xs={12} sm={6} md={3}>
    <p>4. Connect</p>
    <GridImg src={connect} />
  </Grid>

</GridBox>

</>

