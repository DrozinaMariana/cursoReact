/* eslint-disable react/prop-types */
import { useState,useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
    const[ carrito,setCarrito]= useState(null)
    const {comidaId}=useParams()

    useEffect(()=>{
        fetch('/simulacionAPI.json')
        .then((res)=>res.json())
        .then((res)=>{
            let encontrado= res.find((item)=>item.id==comidaId)
            setCarrito(encontrado)
        })
        .catch((error)=>console.log(error))
    },[comidaId])

    return (
        <div>
            {
                carrito ? <ItemDetail  producto={carrito}/>
                :
                <h3>No hay productos</h3>
                    
            }
        </div>
    ) 
}

export default ItemDetailContainer;