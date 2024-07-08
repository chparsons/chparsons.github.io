import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
//import Grid from '@mui/material/Unstable_Grid2';

import ItemLink from './components/ItemLink';
import { project_thumbs } from './config/projects';

const Header = () => <Box>
  <Typography variant="h2" gutterBottom>
    Christian Parsons
  </Typography>
  <Typography variant="h4" gutterBottom sx={{
    fontWeight: '100',
  }}>
    Product Engineering
  </Typography>
  <Typography variant="subtitle1" gutterBottom sx={{
    fontWeight: '100',
  }}>
    R&D — Data viz - UI — Data science - AI/ML
  </Typography>
</Box>

const Thumb = ({
  link,
  title,
  chip,
  description,
  image,
}) =>
  <ItemLink
    link={link}
    style={{ textDecoration: 'none' }}
  >
    <Card
      sx={{ maxWidth: 260 }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{ width: 260, height: 195 }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              overflow: 'hidden',
              textWrap: 'nowrap',
              textOverflow: 'ellipsis',
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              height: '40px',
              overflow: 'hidden',
              display: '-webkit-box',
              WebkitLineClamp: '2',
              WebkitBoxOrient: 'vertical',
            }}
          >
            {chip && <span style={{
              marginRight: '4px',
              //backgroundColor: '#efefef',
              //borderRadius: '12px',
              //padding: '2px 8px',
              color: '#222',
            }}>{`${chip} —`}</span>}
            <span>{description}</span>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </ItemLink>

export default () => 
  <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
    marginBottom: '60px',
  }}>
    <Header /> 
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        {project_thumbs.map(d =>
          <Grid item
            xs={12} sm={4} md={3} xl={2}
            key={d.title}
          >
            <Thumb
              link={d.link}
              title={d.title}
              chip={d.chip}
              description={d.description}
              image={d.image}
            />
          </Grid>
        )}
      </Grid>
    </Box>
  </Box>

