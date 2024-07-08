import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import GitHubIcon from '@mui/icons-material/GitHub';

import Typo from '../../components/Typo';
import Tools from '../../components/Tools';
import Client from '../../components/Client';
import Quote from '../../components/Quote';
import GridBox from '../../components/GridBox';
import GridImg from '../../components/GridImg';
import ExploreProject from '../../components/ExploreProject';

import logo from '../../assets/logos/gl.png';
import img1 from '../../assets/qpr/home.jpg';
import img2 from '../../assets/qpr/historia.jpg';

const tools = [
  {
    label: 'js',
    link: '//developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: 'web',
    link: '//en.wikipedia.org/wiki/Web_platform',
  },
  {
    label: 'crowdmap',
    link: '//www.ushahidi.com/',
  },
];

export default () => <>
  <Typo variant='h3' gutterBottom>
    Qué pasa Riachuelo
  </Typo>

  <Tools tools={tools} />

  <Box sx={{
    display: 'flex',
    alignItems: 'center',
  }}>
    <Client
      logo={logo}
      link='//garagelab.tumblr.com/'
      />
    <Box sx={{
      marginBottom: '20px',
      marginLeft: '10px',
    }}>
      <a href="//github.com/garagelab/qpr2" target="_blank" style={{ color: '#888' }}>
        <GitHubIcon />
      </a>
    </Box>
  </Box>

  <Quote sx={{
    marginBottom: '40px',
  }}>
<p>Las aguas que fluyen de la boca de un río van rumbo a otro lugar inmenso.</p>
<p>— John Berger</p>
  </Quote>

  <Typo variant='body1' gutterBottom>

<p>
Que pasa riachuelo is an <strong>environmental monitoring platform</strong> that encourages territorial organizations, activists and local journalists to be key players in monitoring the riachuelo basin situation and not letting this issue disappear from the public agenda.
</p>

<p>
A platform that promotes online monitoring based on the combination of disclosure of public data, crowsourced information delivered from local organizations and news produced by local media. The platform delivers stories which are collective documents.
</p>

<p>
These features allow us to consider QPR as platform that enables affected people to participate with their own voices in the process of monitoring the clean up and restoration works of the Matanza-Riachuelo river basin.
</p>

  </Typo>

  <GridBox>

    <Grid item sm={12} md={6}>
      <GridImg src={img1} /> 
    </Grid>

    <Grid item sm={12} md={6}>
      <GridImg src={img2} /> 
    </Grid>

  </GridBox>

  <ExploreProject
    link='//garagelab.github.io/qpr2/'
    sx={{
      marginBottom: '40px',
    }}
  />

</>

