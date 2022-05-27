import { doc, getDoc, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getItem, getProduct } from "../data/itemData"
import ItemDetail from "./ItemDetail"



const ItemDetailContainer = () => {
    //Recuperamo el ID q nos manda por URL
    const { itemID } = useParams()

    const [item, setItem] = useState([])

    // const getItem = () => {
    //     const getItemsPromise = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve(itemsData.filter(i => i.id === itemID))
    //         }, 1000);
    //     })
    //     getItemsPromise.then(data => {
    //         //console.log(data);
    //         setItem(data)
    //     })
    // }


    //Optengo Los PRODUCTOS y los transformo en un array
    // const getProduct = async (ID) => {
    //     const db = getFirestore()
    //     const docRef = doc(db, "products", ID)

    //     const producto = (await getDoc(docRef))

    //     const data = ({ id: producto.id, ...producto.data() })
    //     //console.log("DATA" , data);
    //     return data
    // }

    useEffect(() => {
        // //obtengo un producto FIREBASE
        getProduct(itemID).then(producto => {
            setItem(producto)
            console.log("ITEM", item);
        })

    }, [itemID])


    return (
        <div>
            <h2 className="font-bold text-xl text-left m-5">Detalle del Producto:</h2>
            <ItemDetail key={item.id} item={item} />
        </div>
    )
}
export default ItemDetailContainer