import { useState } from "react";
import { useAppContext } from "./context/AppContext";
import { useCartContext } from "./context/CartContext";

//Detalles Individual producto 

const ItemCount = ({ stock, onAdd, id }) => {
    //console.log("Contador");
    const [count, setCount] = useState(1)

    const { addToCart } = useCartContext()
    const { products } = useAppContext()

    const addHandler = () => {
        //console.log("Agrego 1");
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const lessHandler = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    const handleClick = (id, cantidad) => {
        const findProduct = products.find((prod)=>prod.id === id)
        if (!findProduct) {
            alert("error en la Base de datos")
            return
        }
        addToCart(findProduct,cantidad)
        onAdd(count)
    }

    return (
        <>
            <div className="flex gap-4 mt-4">
                <div className="flex row">
                    <button className="btn btn-ghost normal-case mx-0.5" onClick={lessHandler}> - </button>
                    <strong className="text-xl mx-0.5 py-2">{count}</strong>
                    <button className="btn btn-ghost normal-case mx-0.5" onClick={addHandler}>+</button>
                </div>
                <div>
                    <button className="btn btn-outline btn-success"
                        onClick={() => handleClick(id, count)}>
                        Agregar
                    </button>
                </div>

            </div>

        </>
    )
}
export default ItemCount