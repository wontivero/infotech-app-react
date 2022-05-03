
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  return (
    <div className="App">

      <Navbar />
      <ItemDetailContainer/>
      <ItemListContainer />
      {/* <ItemCount/> */}
    </div>
  );
}

export default App;
