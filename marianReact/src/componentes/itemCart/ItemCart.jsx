/* eslint-disable react/prop-types */
import './itemCart.css';
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/Card';
import { CartContext } from '../../CartContext/CartContext';
import { useContext } from 'react';

const ItemCart = ({comida}) => {

    const {eliminarComida}=useContext(CartContext)
    return (
        <div>
            <Card style={{ width: '18rem' }}className='estiloCard'>
                <Card.Img variant="top" src={comida.comida.img} />
                <Card.Body>
                    <Card.Title>{comida.comida.nombre}</Card.Title>

                    <Card.Text>$ {comida.comida.precio}</Card.Text>
                    <Card.Text>cantidad: {comida.cantidad}</Card.Text>  
                </Card.Body>
                <Card.Footer>descripcion:{comida.comida.descripcion}</Card.Footer>
                <div>
                <Button variant='danger'onClick={()=>eliminarComida(comida.comida.id)} >quitar</Button>
                </div>
                
            </Card>

        </div>
    );
};

export default ItemCart;