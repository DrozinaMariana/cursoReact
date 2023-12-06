/* eslint-disable react/prop-types */

// creacion del contexto
import { createContext,useState } from "react";
export const CartContext=createContext()

export  const CartProvider=({children})=>{
    const[carrito,setCarrito]=useState([])

    function addToCard(comida,cantidad){
        if(!isInCart(comida.id)){
            setCarrito((prev)=> [...prev,{comida,cantidad}])
        }

    }
    function isInCart(comId){
        return carrito.some((item)=>item.id===comId)
    }
    function sumaCarrito(){
        let suma=0
        carrito.forEach((comidas)=>suma +=comidas.cantidad)
        return suma
    }
    function vaciarCarrito(){
        let carrito=[]
        setCarrito(carrito)
    }
    const eliminarComida=(ComidaEliminar)=>{
        let filtro = carrito.filter((prod => prod.comida.id !== ComidaEliminar))
        setCarrito(filtro)
    }
    function totalCompra(){
            return carrito.reduce((acumulador, comida) => acumulador + comida.comida.precio * comida.cantidad, 0)
        }
    return(
        <CartContext.Provider value={
            {
                carrito,
                setCarrito,
                addToCard,
                isInCart,
                sumaCarrito,
                vaciarCarrito,
                totalCompra,
                eliminarComida
            }
        } >
            {children}

        </CartContext.Provider>

    )

}