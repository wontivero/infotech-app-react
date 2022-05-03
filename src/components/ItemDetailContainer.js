import { useEffect, useState } from "react"
import { itemsData } from "../data/itemData"
import ItemCard from "./ItemCard"

const ItemDetailContainer = () => {

    const [item, setItem] = useState([])

    const getItem = () => {
        const getItemsPromise = new Promise((resolve, reject) => {

            setTimeout(() => {
                resolve(itemsData.filter(i => i.id === "1"))
            }, 2000);
        })

        getItemsPromise.then(data => {
            console.log(data);
            setItem(data)
        })
    }

    useEffect(() => {
        getItem()
    }, [])

    
    return (
        <div>
            <h2 className="font-bold text-xl text-left m-5">Producto Destacado</h2>
            {item.map(articulo => <ItemCard key={articulo.id} item={articulo} />)}
        </div>
    )
}
export default ItemDetailContainer