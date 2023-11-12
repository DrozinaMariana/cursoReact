/* eslint-disable react/prop-types */
import Button from "react-bootstrap/esm/Button";
import { useState } from "react";


const ItemCount = ({initial,onAdd}) => {
    const[sumador,setSumador]= useState(initial)

    function aumentar(){
        if(sumador>0){
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
            <Button variant="secondary" onClick={aumentar}>aumentar</Button>
            <p>cantidad:{sumador}</p>
            <Button variant="secondary" onClick={restar}>restar</Button>
            <Button variant="primary"onClick={()=>onAdd(sumador)}>Agregar al carrito</Button>
        </div>
    );
};

export default ItemCount;