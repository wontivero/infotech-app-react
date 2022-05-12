
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import CartContextProvider from './components/context/CartContext';
import AppContextProvider from './components/context/AppContext';


function App() {
  return (
    <AppContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path='/' element={<ItemListContainer />}></Route>
            <Route path='/categoria/:categoriaID' element={<ItemListContainer />}></Route>
            <Route path='/item/:itemID' element={<ItemDetailContainer />}></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </CartContextProvider>
    </AppContextProvider>
  );
}

export default App;
