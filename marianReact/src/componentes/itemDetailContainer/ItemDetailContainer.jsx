/* eslint-disable react/prop-types */
import { useState,useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import {getFirestore,doc,getDoc}from 'firebase/firestore';




function ItemDetailContainer() {
    
    const {comidaId}=useParams()
    const[ comida,setComida]= useState(null)
    

    useEffect(()=>{
        const db = getFirestore()
        const comidaDetail= doc(db,"platos",comidaId)
        getDoc(comidaDetail).then((res)=>{
            const data= res.data()
            const detalleComida={id:res.id,...data}
            setComida(detalleComida)
        })
        .catch((error)=>console.log(error))
    },[comidaId])

    return (
        <div>
            {
                comida ? <ItemDetail  comida={comida}/>
                :
                <h3>no hay mas de éste plato </h3>
                    
            }
        </div>
    ) 
}

export default ItemDetailContainer;