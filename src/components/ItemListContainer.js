import { collection, getDocs, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getItem } from "../data/itemData"
import ItemCard from "./ItemCard"

const ItemListContainer = () => {

    const { categoriaID } = useParams()
    const [items, setItems] = useState([])


    // useEffect(() => {

    //     const db = getFirestore()
    //     const q = collection(db, "products")

    //     getDocs(q).then(snapshot => {
    //         setItems(snapshot.docs.map((doc) => ({
    //             id: doc.id, ...doc.data()
    //         })))
    //     })

    // }, [])


    //Optengo Los PRODUCTOS y los transformo en un array co 
    const getProducts = async () => {
        const db = getFirestore()
        const q = collection(db, "products")

        const data = (await getDocs(q)).docs.map((doc) => ({
            id: doc.id, ...doc.data()
        }))

        return data
    }


    useEffect(() => {

        // const productos = getDocs(q).then(snapshot => {
        //     setItems(snapshot.docs.map((doc) => ({
        //         id: doc.id, ...doc.data()
        //     })))
        // })

        if (categoriaID === undefined) {

            getProducts().then(productos => {
                setItems(productos)
            })
        }
        else {
            getProducts().then(productos => {
                setItems(productos.filter(producto => producto.category === categoriaID))
            })        
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