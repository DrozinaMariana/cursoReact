
import { useState, useEffect } from "react";
import './ItemListContainer.css';
import ItemList from "../itemList/ItemList";
import { useParams } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import {getFirestore,collection,getDocs,query,where} from 'firebase/firestore'


const ItemListContainer = () => {

    const [listaComidas, setlistaComidas] = useState([])
    const { category } = useParams()
    const [loading,setLoading]=useState(false)

    useEffect(() => {
        setLoading(true) 
        const bd = getFirestore()
        const filtrados=category ? query (collection(bd,"platos"),where("categoria","==",category))
        : collection(bd,"platos")
        
        getDocs(filtrados)
        .then((res)=>{
            const listaBd = res.docs.map((c)=>{
                return {id:c.id,...c.data()}
            })
            setlistaComidas(listaBd)

        })
        .catch((error)=> console.log(error))
        .finally(setLoading(false))

    }, [category])


    return (
        < >
            {

                loading? <div className="ubicacion"><Spinner className="estiloLoading"/></div>
                :
                <ItemList lista={listaComidas} />


            }

        </>
    )
}

export default ItemListContainer;