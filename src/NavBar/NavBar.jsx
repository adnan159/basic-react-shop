import React from 'react';

export default function NavBar({setKeyword}) {
    const handleChange = (e) => {
        setKeyword(e.target.value);
    }

    return (
        <div className='demo-nav-bar'>
            <span>My Shop</span>
            <input 
                type='text' 
                placeholder='Search' 
                className='demo-shop-search'
                onChange={handleChange}
             />
        </div>
    )
}
