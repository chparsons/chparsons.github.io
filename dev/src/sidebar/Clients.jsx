import React from 'react';
import Grid from '@mui/material/Grid';

import Typo from '../components/Typo';
import GridBox from '../components/GridBox';
import GridImg from '../components/GridImg';
import ItemLink from '../components/ItemLink';

import cision from '../assets/logos/cision.svg';
import bw from '../assets/logos/brandwatch.svg';
import ch from '../assets/logos/crimson.png';
import gl from '../assets/logos/gl.png';
import infomous from '../assets/logos/infomous.jpg';
import rudni from '../assets/logos/rudni.png';
import naturkundemuseum from '../assets/logos/naturkundemuseum.jpg';
import itau from '../assets/logos/itau.jpg';
import qb9 from '../assets/logos/qb9.png';
import piksel from '../assets/logos/piksel.jpg';
import arteleku from '../assets/logos/arteleku.jpg';
import medialab_prado from '../assets/logos/medialab_prado.jpg';
import videobrasil from '../assets/logos/videobrasil.png';
import una from '../assets/logos/una.svg';
import moldeo from '../assets/logos/moldeo.png';
import mmamm from '../assets/logos/mmamm.jpg';
import vad from '../assets/logos/vad.jpg';
import castagnino from '../assets/logos/castagnino.jpg';
import mamba from '../assets/logos/mamba.jpg';
import cceba from '../assets/logos/cceba.jpg';
import antic_teatre from '../assets/logos/antic_teatre.jpg';
import complejo_teatral from '../assets/logos/complejo_teatral.jpg';
import juventus from '../assets/logos/juventus.svg';
import fna from '../assets/logos/fna.jpg';
import ethos from '../assets/logos/ethos.png';
import fadu from '../assets/logos/fadu.jpg';
import fase2 from '../assets/logos/fase2.jpg';

const logos = [
  {
    src: cision,
    link: '//cision.com/',
  },
  {
    src: bw,
    link: '//brandwatch.com/',
  },
  {
    src: ch,
    link: '//en.wikipedia.org/wiki/Crimson_Hexagon',
  },
  {
    src: gl,
    link: '//garagelab.tumblr.com/',
  },
  {
    src: infomous,
    link: '//www.crunchbase.com/organization/infomous',
  },
  {
    src: rudni,
    link: '//www.rudni.com/',
  },
  {
    src: naturkundemuseum,
    link: '//www.naturkundemuseum.uni-halle.de/',
  },
  {
    src: itau,
    link: '//artsandculture.google.com/partner/fundacion-itau-argentina',
  },
  {
    src: qb9,
    link: '//x.com/qb9entertaiment',
  },
  {
    src: piksel,
    link: '//piksel.no',
  },
  {
    src: arteleku,
    link: '//artxibo.arteleku.net/',
  },
  {
    src: medialab_prado,
    link: '//miteco.gob.es/es/ceneam/recursos/pag-web/medialab-prado.html',
  },
  {
    src: videobrasil,
    link: '//site.videobrasil.org.br/',
  },
  {
    src: una,
    link: '//multimedia.una.edu.ar/',
  },
  {
    src: moldeo,
    link: '//moldeointeractive.com.ar/',
  },
  {
    src: mmamm,
    link: '//espaciocultural.ciudaddemendoza.gob.ar/?page_id=202',
  },
  {
    src: vad,
    link: '//x.com/vadfestival',
  },
  {
    src: castagnino,
    link: '//castagninomacro.org/',
  },
  {
    src: mamba,
    link: '//museomoderno.org/',
  },
  {
    src: cceba,
    link: '//www.cceba.org.ar/',
  },
  {
    src: antic_teatre,
    link: '//www.anticteatre.com/',
  },
  {
    src: complejo_teatral,
    link: '//complejoteatral.gob.ar/',
  },
  {
    src: juventus,
    link: '//juventuslyrica.ar/',
    style: {
      width: '80%',
      paddingLeft: '20%',
    },
  },
  {
    src: fna,
    link: '//en.wikipedia.org/wiki/Fondo_Nacional_de_las_Artes',
  },
  {
    src: ethos,
  },
  {
    src: fadu,
    link: '//www.fadu.uba.ar/',
  },
  {
    src: fase2,
  },
];

const Logo = ({ src, link, style }) =>
  <Grid item xs={6} sm={4} md={3} lg={2}>
    <ItemLink link={link}>
      <GridImg src={src} style={{
        maxWidth: '200px',
        ...(style || {}),
      }} />
    </ItemLink>
  </Grid>

export default () => <>

  <Typo variant="h3" gutterBottom>
    Clients
  </Typo>

  <GridBox> 
    {logos.map(({ src, link, style }) => 
      <Logo
        key={src}
        src={src}
        link={link}
        style={style}
      />)}
  </GridBox>

</>

