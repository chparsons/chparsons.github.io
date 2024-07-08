import React from 'react';
import Box from '@mui/material/Box';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import Typo from '../../components/Typo';
import Tools from '../../components/Tools';
import Client from '../../components/Client';
import Quote from '../../components/Quote';

import logo from '../../assets/logos/infomous.jpg';

const tools = [
  {
    label: 'js',
    link: '//developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: 'web',
    link: '//en.wikipedia.org/wiki/Web_platform',
  },
];

export default () => <>
  <Typo variant='h3' gutterBottom>
    Infomous
  </Typo>

  <Tools tools={tools} />

  <Box sx={{
    display: 'flex',
    alignItems: 'center',
  }}>
    <Client
      logo={logo}
      link='//crunchbase.com/organization/infomous'
      />
    <Box sx={{
      marginBottom: '20px',
      marginLeft: '10px',
    }}>
      <a href="//linkedin.com/company/infomous/" target="_blank" style={{ color: '#888' }}>
        <LinkedInIcon />
      </a>
    </Box>
  </Box>

  <Typo variant='body1' sx={{
    marginBottom: '30px',
  }}>
Infomous Inc. was a start up based in Cambridge, Massachussetts and NY. It was created by Icosystem Corp., a company dedicated to predictive analytics using agent-based modeling.
  </Typo>

  <Quote>
Infomous is an engaging visual exploration platform that shows users trending topics from virtually any online information source (news, search, social, consumer reviews...) and lets them interact with these topics for easy exploration of related content.
  </Quote>


</>

