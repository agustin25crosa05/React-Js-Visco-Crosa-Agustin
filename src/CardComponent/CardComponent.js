import React from 'react';
import {Card, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';
import './CardComponent.css';

const CardComponent = ({name, price, img, description}) => {
  return(
    <>
      <Card className='containerCard'>
        <CardBody>
          <CardTitle className="mb-2 mt-2 text-center" tag="h4">{name}</CardTitle>
          <img src={img} alt='clothes'width={345}/>
          <CardText>{description}</CardText>
          <CardSubtitle className="mb-2 mt-2 text-center text-muted"tag="h5">{price}</CardSubtitle>
        </CardBody>
      </Card>
    </>
  );
};


export default CardComponent;

