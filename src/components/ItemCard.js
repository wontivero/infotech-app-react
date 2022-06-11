import { Link } from "react-router-dom"

//Item Detalle para Grilla
const ItemCard = (props) => {

    const { id, name, categoria, precio, img } = props.item
    return (
        <div >
            <div className="card  bg-base-100 shadow-xl ring-offset-2 ring-2 m-4 ">
            <figure className="max-w-fit h-96 p-6"><img src={img} alt="infotech Product" /></figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title justify-center">{name}</h2>
                    <p>{categoria}</p>
                    {/* <h2 className="text-lg">Stock: {stock}</h2> */}
                    <h2 className="text-xl">${precio}</h2>
                    {/* <div><ItemCount /></div> */}
                    <div className="card-actions justify-center">
                        <Link to={`/item/${id}`} className="btn btn-outline btn-success">Más Info</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ItemCard

