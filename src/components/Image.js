import React from 'react'
import products from "../product";
import { Card } from 'react-bootstrap';

const Image = () => {
  return (
    <div>
      <Card.Img variant="top" src={products.img} />
    </div>
  );
}

export default Image