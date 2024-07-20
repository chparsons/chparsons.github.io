import React from 'react'

import Mapamundi from '../projects/mapamundi/Mapamundi'

import Embeddings from '../projects/embeddings/Embeddings'
import MoonPlot from '../projects/moonplot/MoonPlot'
import Dataviz from '../projects/dataviz/Dataviz'
//import WikiBrands from '../projects/wikibrands/WikiBrands'
import ImageAnalysis from '../projects/image_analysis/ImageAnalysis'
import Infomous from '../projects/infomous/Infomous'
import CamaraLucida from '../projects/camara_lucida/CamaraLucida'
import Afluentes from '../projects/afluentes/Afluentes'
import QPR from '../projects/qpr/QPR'
import QPBB from '../projects/qpbb/QPBB'
import TerraIncognita from '../projects/terraincognita/TerraIncognita'
import Cicadas from '../projects/cicadas/Cicadas'
import ARlab from '../projects/arlab/ARlab'
//import Pajaros from '../projects/Pajaros'
//import Opera from '../projects/Opera'
//import DineroPolitica from '../projects/DineroPolitica'

import mapamundi from '../assets/thumbs/mapamundi.jpg';
import embeddings from '../assets/thumbs/embeddings.jpg';
import moonplot from '../assets/thumbs/moonplot.jpg';
import dataviz_post from '../assets/thumbs/dataviz_post.jpg';
//import wikibrands from '../assets/thumbs/wikibrands.jpg';
import image_analysis from '../assets/thumbs/image_analysis.jpg';
import infomous from '../assets/thumbs/infomous.jpg';
import qpr from '../assets/thumbs/qpr.jpg';
import micromundos from '../assets/thumbs/micromundos.jpg';
import camaralucida from '../assets/thumbs/camaralucida.jpg';
import afluentes from '../assets/thumbs/afluentes.jpg';
import qpbb from '../assets/thumbs/qpbb.jpg';
import cicadas from '../assets/thumbs/cicadas.jpg';
import terraincognita from '../assets/thumbs/terraincognita.jpg';
import arlab from '../assets/thumbs/arlab.jpg';

const project_routes = [
  {
    path: '/mapamundi',
    element: <Mapamundi />,
  },
  {
    path: '/embeddings',
    element: <Embeddings />,
  },
  {
    path: '/moonplot',
    element: <MoonPlot />,
  },
  {
    path: '/dataviz',
    element: <Dataviz />,
  },
  {
    path: '/imageanalysis',
    element: <ImageAnalysis />,
  },
  {
    path: '/camaralucida',
    element: <CamaraLucida />,
  },
  {
    path: '/infomous',
    element: <Infomous />,
  },
  {
    path: '/qpr',
    element: <QPR />,
  },
  {
    path: '/afluentes',
    element: <Afluentes />,
  },
  {
    path: '/qpbb',
    element: <QPBB />,
  },
  {
    path: '/terraincognita',
    element: <TerraIncognita />,
  },
  {
    path: '/cicadas',
    element: <Cicadas />,
  },
  {
    path: '/arlab',
    element: <ARlab />,
  },
];

const project_thumbs = [
  {
    link: '/mapamundi',
    title: 'Mapamundi',
    chip: 'DataViz',
    description: 'World map from a geometric interpretation of data',
    image: mapamundi,
  },

  {
    link: '/embeddings',
    title: 'Text Embeddings',
    chip: 'DataViz',
    description: 'Document embeddings visualization',
    image: embeddings,
  },

  {
    link: '/moonplot',
    title: 'Moon Plot',
    chip: 'DataViz',
    description: 'Correspondence analysis visualization',
    image: moonplot,
  },

  {
    link: '/dataviz',
    title: 'Cycle of Data',
    chip: 'Post',
    description: 'What is data visualization?',
    image: dataviz_post,
  },

  //{
    //link: '/wikibrands',
    //title: 'Wiki-Brands',
    //chip: 'DataViz',
    //description: 'Dataset of brands from wikidata knowledge graph',
    //image: wikibrands,
  //},

  {
    link: '/imageanalysis',
    title: 'Image Analysis UI',
    chip: 'DataViz',
    description: 'Exploratory UI for AI image classification',
    image: image_analysis,
  },

  {
    link: '//micromundos.github.io',
    title: 'Micromundos',
    chip: 'EdTech',
    description: 'Collaborative computing platform for kids',
    image: micromundos,
  },

  {
    link: '/camaralucida',
    title: 'Camara Lucida',
    chip: 'R&D',
    description: 'AR Projection mapping research',
    image: camaralucida,
  }, 

  {
    link: '/qpr',
    title: 'Qué pasa Riachuelo',
    chip: 'UI',
    description: 'Environmental monitoring platform',
    image: qpr,
  },

  {
    link: '/afluentes',
    title: 'Afluentes',
    chip: 'Experiment',
    description: 'Projected sandbox \\ Interactive installation',
    image: afluentes,
  },

  {
    link: '/qpbb',
    title: 'Projected Data Viz',
    chip: 'Experiment',
    description: 'AR + Data Viz',
    image: qpbb,
  },

  {
    link: '/terraincognita',
    title: 'Terra Incognita',
    chip: 'Art',
    description: 'Interactive installation',
    image: terraincognita,
  },

  {
    link: '/cicadas',
    title: 'Cicadas',
    chip: 'Art \\ Music',
    description: 'Agent-based simulation of cicadas',
    image: cicadas,
  },

  {
    link: '/arlab',
    title: 'AR Lab',
    chip: 'R&D',
    description: 'Projection mapping research lab',
    image: arlab,
  },

  {
    link: '/infomous',
    title: 'Infomous',
    chip: 'DataViz',
    description: 'Start up',
    image: infomous,
  },
];

export { project_routes, project_thumbs };

