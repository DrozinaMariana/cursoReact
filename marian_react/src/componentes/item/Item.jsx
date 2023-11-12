/* eslint-disable react/prop-types */

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Item({producto}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={producto.img} />
      <Card.Body>
        <Card.Title>{producto.nombre}</Card.Title>
        <Link to={`/item/${producto.id}`}><Button variant="primary">ver detalle comida</Button></Link>
      </Card.Body>
    </Card>
  );
}

export default Item;