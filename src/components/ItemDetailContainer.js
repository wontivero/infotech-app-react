import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getItem } from "../data/itemData"
import { useAppContext } from "./context/AppContext"
import ItemDetail from "./ItemDetail"



const ItemDetailContainer = () => {
    //Recuperamo el ID q nos manda por URL
    const {itemID} =useParams()
    const { products } = useAppContext()
    const [item, setItem] = useState([])

    useEffect(() => {
        setItem(products.filter(i=>i.id === itemID))
        
    }, [itemID, products])

    
    return (
        <div>
            <h2 className="font-bold text-xl text-left m-5">Detalle del Producto:</h2>
            {item.map(articulo => <ItemDetail key={articulo.id} item={articulo} />)}
            
            
        </div>
    )
}
export default ItemDetailContainer