import { useState } from "react"
import { Link } from "react-router-dom"
import ItemCount from "./ItemCount"

const ItemDetail = (props) => {
  
    const { id, name, categoria, precio, stock, img } = props.item
    const [terminar, setTerminar] = useState(false)

    const onAdd=(count)=>{
        setTerminar(true)
        console.log(count)
    }

    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl ring-offset-2 ring-2 m-4">
            <figure><img src={img} alt="Shoes" /></figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title justify-center">{name}</h2>
                    <p>{categoria}</p>
                    <h2 className="text-lg">Stock: {stock}</h2>
                    <h2 className="text-xl">${precio}</h2>
                    
                    <div class="card-actions justify-center">
                        {terminar?(
                            <Link to={``} class="btn btn-outline btn-accent">Finalizar Compra</Link>   
                        ):(
                            <div><ItemCount stock={stock} onAdd={onAdd}/></div>
                        )}
                        
                    </div>
                </div>
            </div>
        </div>
    )
  
}
export default ItemDetail