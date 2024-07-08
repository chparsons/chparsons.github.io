import React from 'react';
import Typo from '../../components/Typo';

//<Typo variant='body1' sx={{
  //marginBottom: '20px',
  //color: '#777',
//}}>
//— experiment —
//</Typo>

export default () => <>

<Typo variant='h6' gutterBottom>
How to display more documents than we could possibly read?
</Typo>

<Typo variant='body1' gutterBottom>

<p>Using 1-dimensional lists aren't very helpful for that. Going through a large set of documents is really hard and time consuming with lists. What if we use a 2-dimensional <span style={{ fontWeight: 'normal' }}>semantic map</span> to explore large sets of documents?</p>

</Typo>

<Typo variant='h6' gutterBottom>
Experiment:
</Typo>

<Typo variant='body1' gutterBottom>

<p>» Embed documents using <a href='//tensorflow.org/hub/tutorials/semantic_similarity_with_tf_hub_universal_encoder' target='_blank'>Universal Sentence Encoder</a> (Tensoflow)</p>

<p>» Project vectors from 512 to 2 dimensions using <a href='//umap-learn.readthedocs.io/' target='_blank'>UMAP</a></p>

<p>» Extract graph/clusters using Topological Data Analysis (<a href='//kepler-mapper.scikit-tda.org/' target='_blank'>Kepler Mapper</a>)</p>

<Typo variant='h6' gutterBottom>
Outcomes:
</Typo>

<p>One interesting finding of the experiment is how a spatial arrengement based only on text and semantic similarity correlates with the metrics extracted from those documents (explore the project to try out coloring the points by different metrics and reveal the correlations)</p>

</Typo>

</>
