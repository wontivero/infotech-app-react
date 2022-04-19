import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';

function App() {
  return (    
    <div className="App">
      
      <Navbar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>E-commerce
          <h1 className="text-4xl font-bold underline">INFO-TECH</h1>
        </p>
      
      </header>
    </div>
  );
}

export default App;
