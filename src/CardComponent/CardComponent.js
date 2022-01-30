import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import './CardComponent.css';
import ItemCount from "../ItemCount/ItemCount";

const MediaCard = (props) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia>
        <img src={props.imgCard} alt='clothes'height={350}/>
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.nameCard}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.descriptionCard}
        </Typography>
        <Typography className="priceCard" gutterBottom variant="h5" component="div">
          {props.priceCard}
        </Typography>
      </CardContent>
      <ItemCount initial='1' />
    </Card>
  );
}

export default MediaCard;

