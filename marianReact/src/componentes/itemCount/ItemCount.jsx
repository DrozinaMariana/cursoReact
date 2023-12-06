/* eslint-disable react/prop-types */
import Button from "react-bootstrap/esm/Button";
import { useState } from "react";


const ItemCount = ({initial,onAdd,stock}) => {
    const[sumador,setSumador]= useState(initial)

    function aumentar(){
        if(stock>initial){
            setSumador(sumador+1)
        }
    }
    function restar(){
        if(sumador>initial){
            setSumador(sumador-1)
        }
    }
    return (
        <div>
            <Button variant="secondary" onClick={aumentar}>Aumentar</Button>
            <p>Cantidad: {sumador}</p>
            <Button variant="secondary" onClick={restar}>Restar</Button>
            <Button variant="primary"onClick={()=>onAdd(sumador)}>Agregar al carrito</Button>
        </div>
    );
};

export default ItemCount;