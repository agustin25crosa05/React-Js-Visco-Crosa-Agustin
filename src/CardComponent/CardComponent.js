import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import './CardComponent.css';
import ItemCount from "../ItemCount/ItemCount";

const MediaCard = ({imgCard, nameCard, descriptionCard, priceCard}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia>
        <img src={imgCard} alt='clothes'height={350}/>
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {nameCard}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {descriptionCard}
        </Typography>
        <Typography className="priceCard" gutterBottom variant="h5" component="div">
          {priceCard}
        </Typography>
      </CardContent>
      <ItemCount/>
    </Card>
  );
}

export default MediaCard;

