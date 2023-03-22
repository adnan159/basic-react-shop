import { useState, useEffect } from 'react';
import NavBar from './NavBar/NavBar';
import Products from './ProductList/Products';
import Cart from './Cart/Cart';
import data from './data';

import './App.css';

function App() {
  const [products, setProducts] = useState([...data])
  const [keyword, setKeyword] = useState("")

  useEffect(()=>{
    const filterProduct = data.filter(product=>{
      let tempTitle = product.title.toLowerCase();
      if(tempTitle.includes(keyword.toLowerCase())){
        return product;
      }
    });
    setProducts(filterProduct );
  },[keyword]);

  return (
    <div className="App">
      <NavBar setKeyword = {setKeyword}/>
      <Products products={products}/>
      <Cart/>
    </div>
  );
}

export default App;
