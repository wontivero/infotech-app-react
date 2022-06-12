import { useState } from "react"
import { Link } from "react-router-dom"
import ItemCount from "./ItemCount"

//LO USO PARA CREAR CARD DE CADA PRODUCTS Idivudual
const ItemDetail = (props) => {

    const { id, name, categoria, precio, stock, img } = props.item
    const [terminar, setTerminar] = useState(false)

    const onAdd = (count) => {
        setTerminar(true)
        //console.log(count)
    }

    return (
        <>

            <div className="card card-compact sm:w-96 shadow-xl w-full ">
                <figure ><img src={img} alt={name} /></figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title justify-center">{name}</h2>
                    <p>{categoria}</p>
                    <h2 className="text-lg">Stock: {stock}</h2>
                    <h2 className="text-xl">${precio}</h2>

                    <div className="card-actions justify-center">
                        {terminar ? (<div>
                            <Link to={'/'} className="btn btn-outline btn-success m-2">Seguir Comprando</Link>
                            <Link to={'/cart'} className="btn btn-outline btn-info m-2">Finalizar Compra</Link>
                            </div>
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