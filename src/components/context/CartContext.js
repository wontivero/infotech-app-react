import React, { createContext, useContext, useState } from "react"

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const isInCart = (id) => cart.find(prod => prod.id === id)

    //Agregar producto / cantidad al carrito
    const addToCart = (producto, cantidad) => {
        const newCart = [...cart]
        const productoEnCart = isInCart(producto.id)

        if (productoEnCart) {
            newCart[newCart.findIndex((prod) => prod.id === producto.id)].quantity += cantidad
            setCart(newCart)
            return
        }

        producto.quantity = cantidad
        setCart([...newCart, producto])
    }

    //eliminar producto del carrito
    const deleteFromCart = (producto) => {
        const newCart = [...cart]
        const productoEnCart = isInCart(producto.id)

        if (!productoEnCart) {
            return
        }

        //filtro y  dejo solo los productos q no tengan ese ID
        const deleteProduct = newCart.filter((prod) => prod.id !== producto.id)
        setCart(deleteProduct)
    }

    //limpiar todo en el cart
    const deleteCart = () => setCart([])

    //Total de Productos:
    const totalCant = () => {
        let total = 0
        cart.forEach(item => total += item.quantity ) 
        return total;
    }

    //console.log(cart);
    return <CartContext.Provider value={{
        cart,
        addToCart,
        deleteFromCart,
        deleteCart,
        setCart,
        totalCant
    }}> {children} </CartContext.Provider>
}
export default CartContextProvider