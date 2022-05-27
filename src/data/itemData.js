import {
    collection,
    doc,
    getDoc,
    getDocs,
    getFirestore
} from "firebase/firestore"

//Optengo Los PRODUCTOS y los transformo en un array
export const getProduct = async (ID) => {
    const db = getFirestore()
    const docRef = doc(db, "products", ID)

    const producto = (await getDoc(docRef))

    const data = ({
        id: producto.id,
        ...producto.data()
    })
    //console.log("DATA" , data);
    return data
}

export const getProducts = async () => {
    const db = getFirestore()
    const q = collection(db, "products")

    const data = (await getDocs(q)).docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    }))

    return data
}
