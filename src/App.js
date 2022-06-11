
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import Footer from './components/Footer';
import CartContextProvider from './components/context/CartContext';
import AppContextProvider from './components/context/AppContext';
import FormCart from './components/FormCart';


function App() {
  return (
    <div className="flex flex-col h-screen">
      <AppContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <Navbar></Navbar>
            <div  className="flex-grow"><Routes>
              <Route path='/' element={<ItemListContainer />}></Route>
              <Route path='/categoria/:categoriaID' element={<ItemListContainer />}></Route>
              <Route path='/item/:itemID' element={<ItemDetailContainer />}></Route>
              <Route path='/cart' element={<Cart />}></Route>
              <Route path='/form' element={<FormCart />}></Route>
            </Routes>
            </div>
            <Footer></Footer>
          </BrowserRouter>
        </CartContextProvider>
      </AppContextProvider>
    </div>
  );
}

export default App;
