import './App.css';
import NavBar from './NavBar/NavBar';
import Products from './ProductList/Products';
import Cart from './Cart/Cart';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Products />
      <Cart/>
    </div>
  );
}

export default App;
