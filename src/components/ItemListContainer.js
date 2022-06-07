import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useAppContext } from "./context/AppContext"
import ItemCard from "./ItemCard"

const ItemListContainer = () => {

    const { products } = useAppContext()
    const { categoriaID } = useParams()
    const [items, setItems] = useState([])


    useEffect(() => {


        if (categoriaID === undefined) {
            // getItem().then((data) => setItems(data))
            setItems(products)
        }
        else {
            setItems(products.filter(producto => producto.category === categoriaID))
        }


        //console.log(items);
    }, [categoriaID, products])

    return (
        <div className="container mx-auto mb-16">
            <div className="grid grid-cols-1 md:container md:mx-auto md:grid-cols-2 lg:grid-cols-3 gap-5 my-2 ">
                {console.log(items)}
                {items.map(articulo => <ItemCard key={articulo.id} item={articulo} />)}
            </div>
        </div>
    )
}
export default ItemListContainer