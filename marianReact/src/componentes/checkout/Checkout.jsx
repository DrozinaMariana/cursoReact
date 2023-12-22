/* eslint-disable no-unused-vars */
import './checkout.css'
import { useContext,useState } from "react";
import { CartContext } from "../../CartContext/CartContext";
import ItemCheckout from "../itemCheckout/ItemCheckout";
import { Link } from "react-router-dom";
import {collection,addDoc,updateDoc,doc,getDoc, getFirestore}from 'firebase/firestore'
const Checkout = () => {
    const {carrito,totalCompra,vaciarCarrito}= useContext(CartContext)
    const [nombre,setNombre]=useState("")
    const[apellido,setApellido]=useState("")
    const[telefono,setTelefono]=useState("")
    const[email,setEmail]=useState("")
    const[emailConfirmacion,setEmailConfirmacion]=useState("")
    const[ordenId,setOrdenId]=useState("")
    const [error,setError]=useState("")

    const finalCompra=(e)=>{
        e.preventDefault()
        if(!nombre || !apellido || !telefono || !email || !emailConfirmacion){
            setError("Error en los datos ingresados. Controlar nuevamente")
            return
        }
        if (email !== emailConfirmacion){
            setError("los Email no coinciden")
            return
        }

        const bd= getFirestore()
        const orden={
            items:carrito.map((prod)=>({
                id:prod.comida.id,
                nombre:prod.comida.nombre,
                precio:prod.comida.precio,
                cantidad:prod.cantidad
            })),
            total:totalCompra(),
            fecha:new Date(),
            nombre,
            apellido,
            telefono,
            email
        }
        Promise.all(
            orden.items.map(async(productoOrden)=>{
                const productoRef= doc(bd,"platos",productoOrden.id);
                const productoDoc= await getDoc(productoRef);
                const stockActual=productoDoc.data().stock;

                await updateDoc(productoRef,{
                    stock:stockActual - productoOrden.cantidad
                })
            })
        )
        .then(()=>{
            addDoc(collection(bd,"numPedido"),orden)
            .then((docRef)=>{
                setOrdenId(docRef.id);
                vaciarCarrito();
            })
            .catch((error)=>{
                setError("error al crear orden de compra")
            })
            
        })
        .catch((error)=>{
            setError("No se pudo actualizar el stock del producto. Vuelva a inentarlo")
        })
        
    }

    return (
        <div>
            <h1>Detalle de la Compra</h1>
            <hr />
            <div>
                {
                    carrito.length?carrito.map((p)=>(
                        <ItemCheckout key={p.comida.id} comida={p}/> )) 
                    :
                    <Link to={'/'}><p>volver a lista de comidas</p></Link>
                    
                }
            </div>
            <h3>Total de la compra: $ {totalCompra()}</h3>
            <p>Complete el formulario para terminar con la compra</p>
            <form onSubmit={finalCompra} className="formulario">
                <label htmlFor="">Nombre:</label>
                <input type="text" onChange={(e)=>setNombre(e.target.value)} />
                <label htmlFor="">Apellido</label>
                <input type="Apellido" onChange={(e)=>setApellido(e.target.value)} />
                <label htmlFor="">Telefono:</label> 
                <input type="number" onChange={(e)=>setTelefono(e.target.value)} /> 
                <label htmlFor="">Email:</label>
                <input type="email"onChange={(e)=>setEmail(e.target.value)} />
                <label htmlFor="">Email confirmacion:</label>
                <input type="email" onChange={(e)=>setEmailConfirmacion(e.target.value)} />
                { error && <p style={{color:"red"}}>{error}</p>}

                    <button type="submit">finalizar compra</button>

                    { ordenId && (
                        <p style={{color:"green"}}>¡Tu compra se realizo exitosamente !. Numero de orden: {ordenId} </p>                      
                    )}
 
            </form>
           
            
        </div>
    );
};

export default Checkout;