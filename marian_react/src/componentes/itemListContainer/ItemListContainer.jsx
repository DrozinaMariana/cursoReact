
import { useState,useEffect } from "react";
import Item from '../item/Item'
import './itemListContainer.css'
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

    const [listaComidas,setlistaComidas]= useState([])
    const {category}=useParams()
    
    useEffect(()=>{
        fetch('./simulacionAPI.json')
        .then((respuesta)=>respuesta.json())
        .then((respuesta)=>{
            if(category){
                const filtrado= respuesta.filter((productos)=>productos.categoria==category)
                setlistaComidas(filtrado)
            }
            else{
                setlistaComidas(respuesta)
            }
        })         
        .catch((error)=>console.log(error))
      
    },[category])


    return (
        <div className="contenedorComidas">
            {
               
               listaComidas.length ? listaComidas.map((comidas)=>
               <Item key={comidas.id} producto={comidas}/> )
               :
               <p>Cargando. Espere un momento por favor</p>
               
               
            }
            
        </div>
    )
}

export default ItemListContainer;