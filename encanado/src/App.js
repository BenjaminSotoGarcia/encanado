import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListConatiner from './components/ItemListContainer/ItemListContainer';
function App() {
  return (
    <div className="App">
        <CartWidget/>
        <ItemListConatiner greeting='HOLA'/>
        <Navbar/>
        <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
