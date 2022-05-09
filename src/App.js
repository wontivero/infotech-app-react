
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';


function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<ItemListContainer />}></Route>
        <Route path='/categoria/:categoriaID' element={<ItemListContainer/>}></Route>
        <Route path='/item/:itemID' element={<ItemDetailContainer />}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>

  );
}

export default App;
