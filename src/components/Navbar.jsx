import React from "react";
import { Link } from 'react-router-dom';
import {CartContext} from '../context/CartContext'

// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {
  const { Count, handleCount} = React.useContext(CartContext)

  const [CartItem,setCartItem] = React.useState('')

  const getCartItem = () => {
    fetch(`http://localhost:8080/cartItems`)
    .then((res)=>res.json())
    .then((res) => setCartItem(res))

    handleCount(CartItem.length)
  }
console.log(CartItem.length)
  React.useEffect(()=>{
    getCartItem()
  },[])
  return (
    <div data-cy="navbar" >
      <Link data-cy="navbar-home-link" to={'/'} >Home</Link>
      <span data-cy="navbar-cart-items-count">{/* count here */}
      CART {Count}
      </span>
      <button data-cy="navbar-login-logout-button">Login</button>
    </div>
  );
};

export default Navbar;
