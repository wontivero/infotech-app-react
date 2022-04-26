import { useState } from "react";

const ItemCount = () => {
    //console.log("Contador");
    const [count, setCount] = useState(0)

    const addHandler = () => {
        //console.log("Agrego 1");
        setCount(count + 1)
    }

    const lessHandler = () => {
        setCount(count - 1)
    }


    return (
        <>
            <div className="w-48 rounded-lg border-solid border-2 border-sky-500 mx-1 mt-4 ">

                <div className="text-lg">Nombre del Producto</div>
                <button className="btn btn-ghost normal-case mx-1.5" onClick={lessHandler}> - </button>
                <strong className="text-xl">{count}</strong>
                <button className="btn btn-ghost normal-case mx-1.5" onClick={addHandler}>+</button>

                <button class="btn btn-outline btn-success m-2">Agregar</button>
            </div>
        </>
    )
}
export default ItemCount