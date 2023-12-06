import {BsFillCartFill } from "react-icons/bs";
import { CartContext } from "../../CartContext/CartContext";
import { useContext } from "react";
const CardWidget = () => {
    const{sumaCarrito}=useContext(CartContext)
    return (
        <div>
            <BsFillCartFill/>
            <p>{sumaCarrito()}</p>
        </div>
    );
};

export default CardWidget;