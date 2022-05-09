import { Link } from "react-router-dom"
import ItemCount from "./ItemCount"

const ItemCard = (props) => {

    const { id, name, categoria, precio, stock, img } = props.item
    return (
        <div>
            {/* <div>{name}</div>
            <div>{categoria}</div>
            <div>{precio}</div>
            <div>{stock}</div> */}

            <div class="card w-96 bg-base-100 shadow-xl ring-offset-2 ring-2 m-4">
            <figure><img src={img} alt="Shoes" /></figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title justify-center">{name}</h2>
                    <p>{categoria}</p>
                    <h2 className="text-lg">Stock: {stock}</h2>
                    <h2 className="text-xl">${precio}</h2>
                    <div><ItemCount /></div>
                    <div class="card-actions justify-center">
                        <Link to={`/item/${id}`} class="btn btn-outline btn-accent">Más Info</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ItemCard

