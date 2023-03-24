import React, { useContext } from "react";
import ThemeContext from "../ThemeContext";

export default function NavBar({ setKeyword }) {
  const value = useContext(ThemeContext);
  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <div className="demo-nav-bar">
      <span>My Shop</span>
      <input
        type="text"
        placeholder="Search"
        className="demo-shop-search"
        onChange={handleChange}
      />
      <div className="shop-dark-light">{value.dark ? 'Dark' : 'Light'}</div>
      <button className="dark-light-button" onClick={value.toggole}>Change Theme</button>
    </div>
  );
}
