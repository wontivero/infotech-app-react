
import { Link } from "react-router-dom";
import { useCartContext } from "./context/CartContext";
import { generateOrder } from "./firebase/firebaseService";
import Swal from "sweetalert2"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useForm } from 'react-hook-form'

//import DeleteButton from "./DeleteButton";
const Cart = () => {
    const { cart, deleteFromCart, deleteCart } = useCartContext()
    const buyer = { name: "", lastName: "", phone: "", email: "" }


    const handlerSave = () => {
        // let total = 0
        // cart.forEach(item => total += item.quantity * item.precio)
        // console.log(total);

        const order = {
            buyer,
            item: cart,
            total: totalCompra()
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

    const totalCompra = () => {
        let total = 0
        cart.forEach(item => total += item.quantity * item.precio)
        return total
    }


    const cartPrint = () => {

        function deleteItem(item) {
            deleteFromCart(item);
        }
        return (
            <div className="overflow-x-auto p-3">
                <span className="font-semibold">DETALLES DE TU COMPRA:</span>
                <table className="table-auto  w-full mt-2">
                    <thead className="border border-slate-600 bg-slate-300">
                        <tr>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                            <th>Total</th>
                            <th><button
                                onClick={deleteCart}
                                className="btn btn-outline btn-error btn-sm tooltip tooltip-error" data-tip="Vaciar Carrito"
                            ><FontAwesomeIcon icon={faTrash} className=" h-4" />
                                {/* Carrito */}
                            </button></th>
                        </tr>
                    </thead>
                    <tbody className="text-center w-full">
                        {cart.map(item => (

                            <tr key={item.id} className="hover border border-slate-400">

                                <td className="text-left pl-3">
                                    <Link to={`/item/${item.id}`}>
                                        <div className="inline-block text-left ">
                                            <img className="h-24 hidden  sm:block" src={item.img} alt={item.name} />
                                            <div className=" ">
                                                <p className=" font-semibold">{item.name}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </td>

                                {/* <th className="">{item.name}</th> */}
                                <td className="">{item.quantity}</td>
                                <td className="">$ {item.precio}</td>
                                <td className="">$ {item.precio * item.quantity}</td>
                                <td className="px-4 ">
                                    <Link to={'/cart'}>
                                        <button className="btn btn-outline btn-error  btn-sm tooltip tooltip-error" data-tip="Quitar producto"
                                            onClick={() => deleteItem(item)}>
                                            <FontAwesomeIcon icon={faTrash} className=" " />
                                            {/* Eliminar */}
                                        </button>
                                    </Link>
                                </td>
                            </tr>))}
                    </tbody>

                </table>
                <div className="float-right text-lg font-semibold mx-2">
                    Total Compra: $ {totalCompra()}
                </div>
            </div>)

    };

    const FormCart = () => {
        const { register, formState: { errors }, handleSubmit } = useForm();

        const onSubmit = (data) => {

            buyer.name = data.firstName
            buyer.lastName = data.lastName
            buyer.phone = data.phone
            buyer.email = data.email
            //console.log(buyer);
            handlerSave()

        }
        return (
            <div className="p-3 mr-2 flex justify-center ">
                <form onSubmit={handleSubmit(onSubmit)} className="w-full">

                    <span className="m-2 font-semibold">DATOS DE FACTURACIÓN:</span>

                    <input {...register("firstName", { required: true, maxLength: 20 })} type="text" placeholder="Nombre" className="input input-bordered input-primary w-full m-2" />
                    <span className='block text-red-600  mx-3'>{errors.firstName && "Su Nombre es requerido"}</span>

                    <input {...register("lastName", { required: true, maxLength: 20 })} type="text" placeholder="Apellido" className="input input-bordered input-primary w-full m-2" />
                    <span className='block text-red-600 mx-3'>{errors.lastName && "Su Apellido es requerido"}</span>

                    <input {...register("phone", { required: true, maxLength: 20 })} type="text" placeholder="Telefono" className="input input-bordered input-primary w-full m-2" />
                    <span className='block text-red-600 mx-3'>{errors.phone && "Su Telefono es requerido"}</span>

                    <input {...register("email", { required: true, maxLength: 20 })} type="email" placeholder="email" className="input input-bordered input-primary w-full m-2" />
                    <span className='block text-red-600  mx-3'>{errors.email && "Su Email es requerido"}</span>

                    <button type="submit" className="btn btn-success mt-2 float-right">
                        Finalizar Compra
                    </button>
                </form>
            </div>
        );
    }


    if (cart.length === 0) {
        return (
            <div className="text-center ">
                <h3 className="m-3 text-lg font-semibold">Tu carro esta vacio.</h3>
                <div className="flex items-center justify-center">
                    <img className="h-48 text-center" src="https://firebasestorage.googleapis.com/v0/b/infotechreact.appspot.com/o/emptyCart.gif?alt=media&token=010333cc-3056-43cd-9c74-fbbd490301c7" alt="Carro sin Productos" />
                </div>


                <Link className="m-4" to="/">
                    <button  className="btn btn-wide btn-success btn-outline">Volver al Inicio</button>
                </Link>
            </div>
        );
    }
    if (cart.length !== 0) {
        return (
            <div className="grid grid-cols-12 gap-1">
                <div className="col-span-12 lg:col-span-8">
                    {cartPrint()}
                </div>

                <div className="col-span-12 lg:col-span-4">
                    {FormCart()}
                </div>
            </div >

        )
    }
}

export default Cart;