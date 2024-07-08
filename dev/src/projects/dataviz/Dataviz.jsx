import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Typo from '../../components/Typo';
import Quote from '../../components/Quote';
import GridBox from '../../components/GridBox';
import GridImg from '../../components/GridImg';
import ItemLink from '../../components/ItemLink';

import krebs_cycle from '../../assets/dataviz/krebs-cycle.jpg';
import data_cycle_1 from '../../assets/dataviz/data-cycle-1.jpg';
import data_cycle_2 from '../../assets/dataviz/data-cycle-2.jpg';

import mapamundi_img from '../../assets/thumbs/mapamundi.jpg';
import embeddings_img from '../../assets/thumbs/embeddings.jpg';
import moonplot_img from '../../assets/thumbs/moonplot.jpg';

const body = 'h6';

export default () => <>
  <Typo variant='h3' gutterBottom>
    What is data visualization?
  </Typo>

<Typo variant={body} gutterBottom sx={{
  marginBottom: '30px',
}}>

Let's take a look at the <a href="//betterworld.mit.edu/spectrum/issues/winter-2017/neri-oxmans-krebs-cycle-of-creativity/" target="_blank">Krebs Cycle of Creativity</a>, by <a href="//en.wikipedia.org/wiki/Neri_Oxman" target="_blank">Neri Oxman</a>

</Typo>

<Quote>
<div>"The Krebs Cycle of Creativity (KCC) is a map that describes the perpetuation of creative energy (creative ATP or ‘CreATP’), analogous to the Krebs Cycle proper. In this analogy, the four modalities of human creativity—Science, Engineering, Design and Art—replace the Krebs Cycle’s carbon compounds."</div>

— KCC at <a href="//jods.mitpress.mit.edu/pub/ageofentanglement/release/1" target="_blank">JODS</a>
</Quote>

<Box sx={{
  display: 'flex',
  justifyContent: 'center',
}}>
  <img
    src={krebs_cycle}
    style={{
      maxWidth: '600px', 
      width: '100%',
      margin: '30px 0',
    }}
  />
</Box>

<Typo variant={body} gutterBottom>

Can we use this concept to think about the work we do with data?

Let's go one step further and try out another transformation:

<p><strong>Krebs Cycle → Creativity → Data</strong></p>

</Typo>

<Box sx={{
  display: 'flex',
  justifyContent: 'center',
}}>
  <img
    src={data_cycle_1}
    style={{
      maxWidth: '600px', 
      width: '100%',
      margin: '30px 0',
    }}
  />
</Box>

<Typo variant={body} gutterBottom>
We end up with four domains of a "data metabolism". Can we find a <strong>catalyzer</strong> for this process?
</Typo>

<Typo variant={body} gutterBottom>
I would like to propose <strong>data visualization</strong> as a catalizing force, bridging the different domains, connecting techniques and knowledge between these different areas, pushing and pulling their centers of mass, acting as a creative force.
</Typo>

<Box sx={{
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '20px',
}}>
  <img
    src={data_cycle_2}
    style={{
      maxWidth: '600px', 
      width: '100%',
      margin: '30px 0',
    }}
  />
</Box>

<Typo variant={body} gutterBottom>
Here are a few projects that convey this idea:
</Typo>

<GridBox> 

  <Grid item sm={12} md={4}>
    <ItemLink link='/mapamundi'>
      <GridImg src={mapamundi_img} title='Mapamundi' />
    </ItemLink>
  </Grid>

  <Grid item sm={12} md={4}>
    <ItemLink link='/embeddings'>
      <GridImg src={embeddings_img} title='Embeddings' />
    </ItemLink>
  </Grid>

  <Grid item sm={12} md={4}>
    <ItemLink link='/moonplot'>
      <GridImg src={moonplot_img} title='Moon Plot' />
    </ItemLink>
  </Grid>

</GridBox>

</>

