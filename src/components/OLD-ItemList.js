// //import:  
// import { useEffect, useState } from "react";
// import { useAppContext } from "./context/AppContext";
// import ItemCard from "./ItemCard";

// const ItemList = () => {

//     //console.log(itemsData);
//     const [items, setItems] = useState([])
//     const { products } = useAppContext()

//     //Promesa q se resuelve 2 seg despues resuelve y carga  ItemsData con setItems 
//     // const getItems = () => {
//     //     const getItemsPromise = new Promise((resolve, reject) => {
//     //         setTimeout(() => {
//     //             resolve(itemsData)
//     //         }, 2000);
//     //     })
//     //     getItemsPromise.then(data => {
//     //         //console.log(data);
//     //         setItems(data)
//     //     })
//     // }

//     //Cuando Montamos el componente
//     useEffect(() => {
//         // getItems()
//         setItems(products)
//     }, [])

//     return (
//         <>
            
//                 <div className="my-2">
//                     {/* envio cada item al ItemCard.js */}
//                     {items.map(articulo => <ItemCard key={articulo.id} item={articulo} />)}
//                 </div>
            
//         </>
//     )
// }
// export default ItemList