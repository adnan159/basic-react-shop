import { useState } from "react";
import {
  Route,
  Routes,
  BrowserRouter as Router
} from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import ThemeContext from "./ThemeContext";
import Checkout from "./Checkout/Checkout";
import "./App.css";
import ProductDetails from "./ProductList/ProductDetails";
import Home from "./Home/Home";

function App() {
  const [keyword, setKeyword] = useState("");
  const [dark, setDark] = useState(false);

  const toggoleDark = () => {
    setDark(prevState => !prevState);
  }

  return (
    <ThemeContext.Provider value={{ dark: dark, toggole: toggoleDark }}>
      <div className={`App ${dark ? 'app-dark' : 'app-light'}`}>
        <Router>
          <NavBar setKeyword={setKeyword} />
          <Routes>
            <Route path="/" element={<Home />} component={()=><Home keyword={keyword} />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
          </Routes>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
