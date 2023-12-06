
/* eslint-disable react/prop-types */
import Card from 'react-bootstrap/Card';

function ItemCheckout({comida}) {
  return (
    <Card style={{ width: '8rem' }}>
      <Card.Img variant="top" src={comida.comida.img} />
      <Card.Body>
        <Card.Title> Nombre: { comida.comida.nombre} x {comida.cantidad}</Card.Title>
      </Card.Body>
    </Card>
  );
} export default ItemCheckout;