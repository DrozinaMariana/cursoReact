/* eslint-disable react/prop-types */

import Card from 'react-bootstrap/Card';
import ItemCount from '../itemCount/ItemCount';
function ItemDetail({producto}) {


  function onAdd(cantidad ){
      alert("se agrego "+ cantidad + " unidades")
    }
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={producto.img} />
      <Card.Body>
        <Card.Title>{producto.nombre}</Card.Title>
        <Card.Text>precio: ${producto.precio}</Card.Text>
        <Card.Text>{producto.descripcion}</Card.Text>
        <ItemCount initial={1} onAdd={onAdd}/>
      </Card.Body>
    </Card>
  );
}

export default ItemDetail;