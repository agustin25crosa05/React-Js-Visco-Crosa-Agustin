import * as React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './Item.css';
//import './Item.json';

/*const Item = ({data}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {data.img}
            {data.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {data.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
*/
const Item = ({data}) => {
  return (
    <Card className="cardComp" sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent className='cardContent'>
            <Typography gutterBottom variant="h5" component="div">
                {data.id}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
                {data.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {data.body}
            </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Item;

