import { useState, useEffect } from 'react';
import NavBar from './NavBar/NavBar';
import Products from './ProductList/Products';
import Cart from './Cart/Cart';
import data from './data';

import './App.css';

function App() {
  const [products, setProducts] = useState([...data]);
  const [keyword, setKeyword] = useState('');
  const [cartItems, setCartItems] = useState([]);

  useEffect(()=>{
    const filterProduct = data.filter(product=>{
      let tempTitle = product.title.toLowerCase();
      if(tempTitle.includes(keyword.toLowerCase())){
        return product;
      } else {
        return '';
      }
    });
    setProducts(filterProduct );
  },[keyword]);

  const addCartItem = (id) => {
    const item = products.find(product=>product.id === id);
    setCartItems((items)=>{
      const itemIndex = items.findIndex(currentItem => currentItem.id === id );
      if(itemIndex === -1 ){
        return [
          ...items, {
            ...item,
            quantity:1
          }
        ];
      } else {
        return items.map(currentItem=> currentItem.id === id ? {
          ...item,
          quantity: parseInt(currentItem.quantity) + 1
        } : currentItem );
      }
      
    });
  }

  return (
    <div className="App">
      <NavBar setKeyword = {setKeyword}/>
      <Products products={products} addCartItem={addCartItem}/>
      <Cart cartItems={cartItems}/>
    </div>
  );
}

export default App;
