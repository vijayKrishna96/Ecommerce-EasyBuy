import React , { useState } from "react";
import "./Navbar.css";
import { Link } from 'react-router-dom'

import logo1 from "../Assets/logo1.png";
import cart_icon from "../Assets/cart_icon.png";

function Navbar() {
  const [menu, setMenu] = useState("shop");

  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <img className="logo" src={logo1} alt="" />
          <p>EasyBuy</p>
        </div>
        <ul className="nav-menu">
          <li onClick={()=>{setMenu("shop");}}><Link className="links" to ='/'>SHOP</Link>{menu === "shop" ? <hr /> : <></>}</li>

          <li onClick={() => {setMenu("mens");}}><Link className="links" to ='/mens'>MEN</Link>{menu === "mens" ? <hr /> : <></>}</li>
          
          <li onClick={() => {setMenu("womens");}}> <Link className="links" to ='/womens'>WOMENS</Link>{menu === "womens" ? <hr /> : <></>}</li>
          
          <li onClick={() => {setMenu("kids");}}><Link className="links" to ='/kids'>KIDS</Link>{menu === "kids" ? <hr /> : <></>}</li>
        </ul>
        <div className="nav-login-cart">
          <Link to='/login'><button>Login</button></Link>
          <Link to='/cart'><img src={cart_icon} alt="" /></Link>
          <div className="nav-cart-count">0</div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
