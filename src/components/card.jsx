import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function MediaCard({imgurl,title,boby}) {
  return (
    <Card sx={{ maxWidth: 345 ,mt:4 }}>
        <CardActionArea>
        <CardMedia
        sx={{ height: 140 }}
        image="../assets/solar1.png"
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {boby}
        </Typography>
      </CardContent>
      </CardActionArea>
      
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}