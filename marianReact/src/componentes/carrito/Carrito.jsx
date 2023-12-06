/* eslint-disable no-unused-vars */
import { useContext} from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../CartContext/CartContext";
import ItemCart from "../itemCart/ItemCart";
import Button from "react-bootstrap/esm/Button";



function Carrito(){
    const {carrito,totalCompra,vaciarCarrito}=useContext(CartContext)
    
    return(
        <>
            {
                carrito.length?carrito.map((elemento)=>
                    <ItemCart key={elemento.comida.id} comida={elemento} />)
                    
                :
                <h1>Aún no compraste nada..</h1>
            }
            <div>
                <hr />
                <h3>total Compra:$ {totalCompra()}</h3>
            </div>
            <hr />
            <div>
                <Button onClick={vaciarCarrito}>Vaciar Carrito</Button>
                <Link to={'/'}><Button>Seguir Comprando</Button></Link>
                <Link to={'/checkout'}><Button>Ir a Pagar</Button></Link>
            </div>

            
        </>

    )   


}export default Carrito;