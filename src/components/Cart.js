
import { Link } from "react-router-dom";
import { useCartContext } from "./context/CartContext";
import { generateOrder } from "./firebase/firebaseService";
import Swal from "sweetalert2"

//import DeleteButton from "./DeleteButton";
const Cart = () => {
    const { cart, deleteFromCart, deleteCart } = useCartContext()
    const buyer = { nombre: "Jose", phone: "351123858", email: "jose@gmail.com" }

    const handlerSave = () => {

        let total = 0
        cart.forEach(item => total += item.quantity * item.precio)
        console.log(total);

        const order = {
            buyer,
            item: cart,
            total: total
        }

        generateOrder(order).then((result) => {
            new Swal({
                title: "Tu orden fue enviada con éxito!",
                text: `Tu n° de orden es: ${result.id}`,
                icon: "success",
                button: "Ok",
            })
                .then(() => deleteCart())
        })
    }



    const cartPrint = () => {

        function deleteItem(item) {
            deleteFromCart(item);
        }





        return (
            <div className="overflow-x-auto p-5">
                <table className="table w-full ">
                    <thead>
                        <tr>

                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                            <th>Total</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className="text-left">
                        {cart.map(item => (

                            <tr key={item.id} className="border-gray-200 hover">
                                <Link to={`/item/${item.id}`}><th className="flex flex-row justify-left items-center pr-4 md:pr-0">
                                    <img className="p-4 h-36" src={item.img} alt={item.name} />
                                    <div className="flex flex-col text-justify">
                                        <p className="">{item.name}</p>
                                    </div>
                                </th>
                                </Link>

                                <th className="">{item.quantity}</th>
                                <th className="">$ {item.precio}</th>
                                <th className="">$ {item.precio * item.quantity}</th>
                                <th className="px-4 lg:pl-2 xl:pl-24">
                                    <Link to={'/cart'}>
                                        <button className="btn btn-outline btn-accent"
                                            onClick={() => deleteItem(item)}>
                                            Eliminar
                                        </button>
                                    </Link>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>)
    };


    if (cart.length === 0) {
        return (
            <div className="text-center">
                <h3 className="mt-32">No has agregado productos</h3>
                <Link className="m-4" to="/">
                    <button data-theme="emerald" className="btn btn-wide">Volver al Inicio</button>
                </Link>
            </div>
        );
    }
    if (cart.length !== 0) {
        return (
            <div data-theme="emerald">
                <div>
                    <ul>{cartPrint()}</ul>
                </div>
                <div className="flex justify-center m-5">
                    <button
                        onClick={deleteCart}
                        className="btn btn-outline btn-error m-4"
                    >
                        Eliminar Todo
                    </button>
                    <button
                        onClick={handlerSave}
                        className="btn btn-outline btn-success  m-4"
                    >
                        Comprar
                    </button>
                </div>
            </div >
        )
    }
}

export default Cart;