import React from 'react';
import Typo from '../../components/Typo';

export default () =>

<Typo variant='body1'>

<span>We humans have been making maps of the world since the beginnings of our culture, from the babylonian <a href='https://en.m.wikipedia.org/wiki/Babylonian_Map_of_the_World' target='_blank'>Imago Mundi</a> to the latest big data based digital maps.</span>

<p>Here a new world map is created from a geometric interpretation of data:</p>

<p>A high-dimensional space is constructed from socio-economic data about countries using different data sources.

Each country is a point in space and each metric is a dimension (around 100 dimensions for the current map).</p>

<p>Using dimensionality reduction (TSNE), clustering (DBSCAN) and topological data analysis (Kepler Mapper), the points in high-dimensional space are projected and embedded in two dimensions.</p>

<p>The result is a flat map that approximates the shape of data in high-dimensional space.

A new world map with different borders and regions emerges. An image of a different geography, not the physical geography of rivers, mountains and deserts, but a geography of people, lives and human activity.</p>

</Typo>

