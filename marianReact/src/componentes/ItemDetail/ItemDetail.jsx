/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from '../itemCount/ItemCount';
import { CartContext } from '../../CartContext/CartContext';
import { useContext, useState} from 'react';
import { Link } from 'react-router-dom';

function ItemDetail({ comida }) {
  const [cantidad, setCantidad] = useState(0)
  const { addToCard,isInCart } = useContext(CartContext)

  function onAdd(sumador) {
    setCantidad(sumador)
    addToCard(comida,sumador)
    isInCart(comida.id)
  }
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={comida.img} />
      <Card.Body>
        <Card.Title>{comida.nombre}</Card.Title>
        <Card.Text>precio: ${comida.precio}</Card.Text>
        <Card.Text>{comida.descripcion}</Card.Text>
        <hr/>
        {cantidad==0? <ItemCount initial={1} onAdd={onAdd} stock={comida.stock}/>
        :
        <Link to={'/'}><Button>seguir comprando</Button></Link>
        }
      </Card.Body>
    </Card>
  );
}

export default ItemDetail;