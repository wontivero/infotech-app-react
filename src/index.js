import React, {
  useEffect
} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import {
  initializeApp
} from "firebase/app";
import {
  doc,
  getDoc,
  getDocs,
  getFirestore
} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGCHmC0AouyMUIHtFrTAa_bSaFyDE_VVk",
  authDomain: "infotechreact.firebaseapp.com",
  projectId: "infotechreact",
  storageBucket: "infotechreact.appspot.com",
  messagingSenderId: "346792536701",
  appId: "1:346792536701:web:ea8c90f67d0debe0515f14"
};

// // Initialize Firebase
 initializeApp(firebaseConfig);


// //obtengo un producto
// const db = getFirestore()

// const q = doc(db, "products", "l63G2Ko7vt6LxQZHepy7")
// getDoc(q).then(snapshot => {
//   console.log(snapshot.data());

// })





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();