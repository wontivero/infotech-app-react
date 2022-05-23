import { useState } from "react"
import { Link } from "react-router-dom"
import ItemCount from "./ItemCount"

const ItemDetail = (props) => {

    const { id, name, category, precio, stock, img } = props.item
    const [terminar, setTerminar] = useState(false)

    const onAdd = (count) => {
        setTerminar(true)
        console.log(count)
    }

    return (
        <>

            <div className="card w-11/12 md:w-3/5 container mx-auto bg-base-100 shadow-xl ring-offset-2 ring-2 m-4">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title justify-center">{name}</h2>
                    <p>{category}</p>
                    <h2 className="text-lg">Stock: {stock}</h2>
                    <h2 className="text-xl">${precio}</h2>

                    <div className="card-actions justify-center">
                        {terminar ? (
                            <Link to={'/cart'} className="btn btn-outline btn-accent">Finalizar Compra</Link>
                        ) : (
                            <div><ItemCount stock={stock} onAdd={onAdd} id={id} /></div>
                        )}

                    </div>
                </div>
            </div>

        </>
    )

}
export default ItemDetail