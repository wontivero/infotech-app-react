// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import {
	addDoc,
	collection,
	doc,
	getDoc,
	getDocs,
	getFirestore,
	Timestamp,
	updateDoc,
} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: process.env.REACT_APP_apikey,
	authDomain: process.env.REACT_APP_authDomain,
	projectId: process.env.REACT_APP_projectId,
	storageBucket: process.env.REACT_APP_storageBucket,
	messagingSenderId: process.env.REACT_APP_messagingSenderId,
	appId: process.env.REACT_APP_appId,
	
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig)

const db = getFirestore()

// ----------------------

// Traer TODOS los items
export const getItems = async () => {
	//console.log("entre a getitems");
	const items = await getDocs(collection(db, "products"))
	return items
	
}

// Traer UN item
export const getItem = async (id) => {
	const item = await getDoc(doc(db, "products", id))
	return item
}

// Generación de order
export const generateOrder = async (order) => {
	const newOrder = await addDoc(collection(db, "orders"), {
		...order,
		date: Timestamp.fromDate(new Date()),
	})
	//console.log(newOrder.id);
	return newOrder
}

// Manejar stock --> plus
export const updateStock = async (itemId, quantity) => {
	const item = await getDoc(doc(db, "products", itemId))
	await updateDoc(doc(db, "products", itemId), {
		stock: item.data().stock - quantity,
	})
}

export default db
