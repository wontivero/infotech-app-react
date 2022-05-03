//import:  
import { useEffect, useState } from "react";
import { itemsData } from "../data/itemData";
import ItemCard from "./ItemCard";

const ItemList = () => {

    //console.log(itemsData);
    const [items, setItems] = useState([])




    //Promesa q se resuelve 2 seg despues resuelve y carga  ItemsData con setItems 
    const getItems = () => {

        const getItemsPromise = new Promise((resolve, reject) => {

            setTimeout(() => {
                resolve(itemsData)
            }, 2000);
        })

        getItemsPromise.then(data => {
            //console.log(data);
            setItems(data)
        })
    }

    //Cuando Montamos el componente
    useEffect(() => {
        getItems()
    }, [])



    return (
        <div>
            {/* envio cada item al ItemCard.js */}
            {items.map(articulo => <ItemCard key={articulo.id} item={articulo} />)}
        </div>
    )
}
export default ItemList