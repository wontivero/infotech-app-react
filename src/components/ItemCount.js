import { useState } from "react";

const ItemCount = ({ stock, onAdd }) => {
    //console.log("Contador");
    const [count, setCount] = useState(0)

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


    return (
        <>
            <div className="flex gap-4 mt-4">
                <div className="flex flex row">
                    <button className="btn btn-ghost normal-case mx-0.5" onClick={lessHandler}> - </button>
                    <strong className="text-xl mx-0.5 py-2">{count}</strong>
                    <button className="btn btn-ghost normal-case mx-0.5" onClick={addHandler}>+</button>
                </div>
                <div>
                    <button className="btn btn-outline btn-accent" onClick={()=> onAdd(count)}>
                        Agregar
                    </button>
                </div>

            </div>

        </>
    )
}
export default ItemCount