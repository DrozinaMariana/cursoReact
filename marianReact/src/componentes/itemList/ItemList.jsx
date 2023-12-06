/* eslint-disable react/prop-types */
import Item from "../item/Item";
import './itemList.css'
const ItemList = ({lista}) => {
    return (
        <div className="contenedorComidas">
            {
            lista.map((comidas)=>
                <Item key={comidas.id} comidas={comidas}/> )
            }
        </div>
    );
};

export default ItemList;