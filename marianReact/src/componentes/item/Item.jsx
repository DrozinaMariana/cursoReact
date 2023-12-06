/* eslint-disable react/prop-types */

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Item({comidas}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={comidas.img} />
      <Card.Body>
        <Card.Title>{comidas.nombre}</Card.Title>
        <Link to={`/item/${comidas.id}`}><Button variant="primary">ver detalle comida</Button></Link>
      </Card.Body>
    </Card>
  );
}

export default Item;