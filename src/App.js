import NavBar from './NavBar/NavBar';
import Products from './ProductList/Products';
import Cart from './Cart/Cart';
import data from './data';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Products products={data}/>
      <Cart/>
    </div>
  );
}

export default App;
