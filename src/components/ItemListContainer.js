import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getItem } from "../data/itemData"
import ItemCard from "./ItemCard"

const ItemListContainer = () => {

    const { categoriaID } = useParams()
    const [items, setItems] = useState([])

    // const getItems = () => {
    //     const getItemsPromise = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve(itemsData)
    //         }, 2000);
    //     })
    //     getItemsPromise.then(data => {
    //         if (categoriaID === undefined) {
    //             setItems(data)
    //         }
    //         else {
    //             setItems(data.filter(producto => producto.categoria === categoriaID ))
    //         }
    //     })
    // }

    useEffect(() => {


        if (categoriaID === undefined) {
            getItem().then((data) => setItems(data))
        }
        else {
            getItem().then((data) => setItems(data.filter(producto => producto.categoria === categoriaID)))
        }


        //console.log(items);
    }, [categoriaID])

    return (
        <div className="container mx-auto">
            <div className="grid  grid-cols-1 md:container md:mx-auto md:grid-cols-2 lg:grid-cols-3 gap-5 my-2 ">
                {items.map(articulo => <ItemCard key={articulo.id} item={articulo} />)}
            </div>
        </div>
    )
}
export default ItemListContainer