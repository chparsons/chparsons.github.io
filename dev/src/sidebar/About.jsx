import React from 'react';
import Grid from '@mui/material/Grid';

import Typo from '../components/Typo';
import GridBox from '../components/GridBox';
import GridImg from '../components/GridImg';
import ItemLink from '../components/ItemLink';

import about_img from '../assets/about.jpg';

export default () => <>

  <Typo variant="h2" gutterBottom>
    Christian Parsons 
  </Typo>

  <GridBox>

    <Grid item sm={6}>
      <GridImg src={about_img} />
    </Grid>

    <Grid item sm={6}>

      <Typo variant="h4" gutterBottom sx={{
        marginLeft: '20px',
      }}>
        About       
      </Typo>

      <Typo variant='h6' gutterBottom sx={{
        marginLeft: '20px',
      }}>

<p>
I build and prototype <strong>technology</strong> for people to help solve relevant problems. I have +10 years of experience in <strong>R&D</strong> making software, interfaces and data-driven products. I work right at the intersection of <strong>engineering & design</strong>, connecting both mindsets to create useful, resilient and playful <strong>products</strong>.
</p>

<p>
As a <strong>product engineer</strong> I focus on building software solutions that provide value to users, and an effective approach to achieve that goal is to build bridges between the lands of user interfaces, data science and product design — as in a <ItemLink link='/dataviz'>Krebs cycle of creativity and data</ItemLink>.
</p>

<p>
I make software artifacts along the full stack in data visualization, data science, user interfaces and interactive graphics. I have deployed technology products in a wide variety of domains, from data analytics and business intelligence to games, ed-tech and art. I have worked in different business settings througout development, research and innovation. I use highly iterative, collaborative and prototyping practices in the process to find product solutions.
</p>

<p>
I think that creative problem solving and continuous life-long learning are the keys to quickly adapt to the constantly changing challenges of our fast paced technological culture.
</p>

      </Typo> 
    </Grid>
  </GridBox>

</>
