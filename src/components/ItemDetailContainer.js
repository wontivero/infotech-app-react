import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useAppContext } from "./context/AppContext"
import ItemDetail from "./ItemDetail"

//USAMOS PARA DETALLES  INDIVIDUAL DE CADA PRODUCTO 

const ItemDetailContainer = () => {
    //Recuperamo el ID q nos manda por URL
    const {itemID} =useParams()
    const { products } = useAppContext()
    const [item, setItem] = useState([])

    useEffect(() => {
        setItem(products.filter(i=>i.id === itemID))
        
    }, [itemID, products])

    
    return (
        <div className="m-20">
            <h2 className="font-bold text-xl text-left m-5">Detalle del Producto:</h2>
            {item.map(articulo => <ItemDetail key={articulo.id} item={articulo} />)}           
            
        </div>
    )
}
export default ItemDetailContainer