
import { Link } from "react-router-dom";
import { useCartContext } from "./context/CartContext";
import { generateOrder } from "./firebase/firebaseService";
import Swal from "sweetalert2"

//import DeleteButton from "./DeleteButton";
const Cart = () => {
    const { cart, deleteFromCart, deleteCart } = useCartContext()
    const buyer = { nombre: "Jose", phone: "351123858", email: "jose@gmail.com" }

    const handlerSave = ()=>{

        let total = 0
        cart.forEach(item => total += item.quantity * item.precio)
        console.log(total);
        
        const order = {
            buyer,
            item: cart,
            total: total    
        }

        generateOrder(order).then((result)=>{
            new Swal({
                title: "Tu orden fue enviada con éxito!",
                text: `Tu n° de orden es: ${result.id}`,
                icon: "success",
                button: "Ok",
            })
            .then(() => deleteCart())
        })


    }
    


    const cartPrint = cart.map((item) => {
        function deleteItem(item) {
            deleteFromCart(item);
        }


        const totalPrice = item.quantity * item.precio;


        return (
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Total</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className="text-left">
                        <tr key={cart.id}>
                            <th>•</th>
                            <td className="">
                                <Link className="btn btn-link w-36" to={`/item/${item.id}`}>
                                    <span>
                                        {item.name}
                                    </span>
                                </Link>
                            </td>
                            <td>{item.quantity}</td>
                            <td>${totalPrice}</td>

                            <td><Link to={'/cart'}>
                                <button className="btn btn-outline btn-accent"
                                    onClick={() => deleteItem(item)}>
                                    Eliminar
                                </button>
                            </Link></td>
                        </tr>
                    </tbody>
                </table>
            </div>)
    });


    if (cart.length === 0) {
        return (
            <div className="text-center">
                <h3 className="mt-32">No has agregado productos</h3>
                <Link className="m-4" to="/">
                    <button data-theme="emerald" class="btn btn-wide">Volver al Inicio</button>
                </Link>
            </div>
        );
    }
    if (cart.length !== 0) {
        return (
            <div data-theme="emerald">
                <div>
                    <ul>{cartPrint}</ul>
                </div>
                <div className="">
                    <button
                        onClick={handlerSave}
                        className="
             mb-2 w-full inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-normal
             uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg
             focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out
             "
                    >
                        Comprar
                    </button>

                    <button
                        onClick={deleteCart}
                        className="
             mb-2 w-full inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-normal
             uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg
             focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out
             "
                    >
                        Borrar Todo
                    </button>
                </div>
            </div >
        )
    }
}

export default Cart;