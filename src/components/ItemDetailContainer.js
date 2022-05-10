import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
// import { Link, useParams } from "react-router-dom"
import { itemsData } from "../data/itemData"
// import ItemCard from "./ItemCard"
import ItemDetail from "./ItemDetail"


const ItemDetailContainer = () => {
    //Recuperamo el ID q nos manda por URL
    const {itemID} =useParams()

    const [item, setItem] = useState([])

    const getItem = () => {
        const getItemsPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(itemsData.filter(i => i.id === itemID))
            }, 1000);
        })
        getItemsPromise.then(data => {
            //console.log(data);
            setItem(data)
        })
    }

    useEffect(() => {
        getItem()
    }, [itemID])

    
    return (
        <div>
            <h2 className="font-bold text-xl text-left m-5">Detalle del Producto:</h2>
            {item.map(articulo => <ItemDetail key={articulo.id} item={articulo} />)}
            
        </div>
    )
}
export default ItemDetailContainer