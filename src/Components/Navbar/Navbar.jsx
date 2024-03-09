import React, { useContext } from 'react'
import { useState } from 'react';
import { FaSearch, FaCartPlus } from "react-icons/fa";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { CartContext, searchcContext } from '../../App';

import { Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

function Navbar() {
  const location = useLocation().pathname
  const [cart] = useContext(CartContext);
  const [searchClick, setSeacrClick] = useState(false) 
  const [menuClick, setMenuClick] = useState(false)
 const [searchText, setSearchText]  = useContext(searchcContext)

  const handleSearchChange = (e) => {
    const value = e.target.value
    setSearchText(value.toLowerCase())

  }


  const isUserLogin = localStorage.getItem("userLogin");

  const handleCartClick = () => {
    if (cart.length <= 0) {
      toast.error("Cart Is Empty - select Product")
    } else {
      toast.warning("Order Now")
    }
  }


  return (
    <>
      <header className='headerContainer'>
        {
          location ==="/products"
            ?

            <div className="search_bar">
              <span onClick={() => setSeacrClick(!searchClick)}>
                <FaSearch />
              </span>
              {searchClick &&
                <div className="searchInput">
                  <input onChange={handleSearchChange} type="search" placeholder='Search By Catagory...' />
                 
                </div>}
            </div>

            :
            <h2 className='tetx-2xl md:text-3xl italic text-[color:var(--special-color)]'>𝓢𝓤𝓟𝓔𝓡 𝓓𝓔𝓐𝓛</h2>

        }
        <nav className="navItems">
          <ul className={`${menuClick ? "right-0" : "-right-[600px]"}`}>
            <li className='md:hidden'>
              <Link className='navItems' to="/">Home</Link>
            </li>
            <li>
              <Link className='navItems' to="/products">Products</Link>
            </li>
            <li onClick={handleCartClick}><Link to={cart.length <= 0 ? '/products' : '/cart'}>Cart</Link></li>
            <li className='logo'><Link to={"/"}>super deal</Link></li>
            <li>
              <Link className='navItems' to="/shipment">Shipment</Link>
            </li>
            <li>
              {
                isUserLogin ?
                  <Link onClick={() => localStorage.removeItem("userLogin")} className='text-red-500'>Log-out</Link>
                  :
                  <Link className='navItems' to="/login">Sign up</Link>
              }
            </li>

          </ul>
        </nav>

        <Link onClick={handleCartClick} className='cartItem' to={cart.length <= 0 ? '/products' : '/cart'}>
          <div className="NavIcon">
            <FaCartPlus />
            <span>{cart.length}</span>
          </div>
        </Link>

        <div onClick={() => setMenuClick(!menuClick)} className='menuIcon'>
          {menuClick ? <IoClose className='text-red-500' />
            :
            <AiOutlineMenuUnfold />

          }

        </div>
      </header>
 
        <div className="addBanner">
          <h5>NO LIMITED</h5>
          <h5> Worldwide free shipping</h5>
          <h5>MONEY BACK</h5>
          <h5> 7 days money back guaranteed</h5>
          <h5>SAFETY</h5>
          <h5> We never share your individual info</h5>
        </div> 
    </>
  )
}

export default Navbar



/*

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../images/logo.png';
import './Navbar.css';
import { adminContext, CartContext } from '../../App';


function Header() {
  const [cart] = useContext(CartContext);
  const [isAdminLogin] = useContext(adminContext) 
  return (
    <Navbar bg="light" expand="lg" className='sticky-top'>
      <Container>
        <Navbar.Brand>
          <Link to="/"> <h1 className="logo">𝖘𝖚𝖕𝖊𝖗 𝖉𝖊𝖆𝖑</h1> </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {isAdminLogin && <Link className='navItems' to="/dashboard">Dashboard</Link>}
            <Link className='navItems' to="/allProducts">Products</Link>
            <Link className='navItems' to="/shipment">Shipment</Link>
            <Link className='navItems' to="/login">Sign up</Link>
          </Nav>
          <Link to={cart.length <= 0 ? '/allProducts' : '/cart'}>
            <div className="NavIcon">
              <AiOutlineShoppingCart className='pdIcon' /> <h5>{cart.length}</h5>

            </div>
          </Link>
          <div className="adminLogin">
            <Link to="/admin-login">
              <AiOutlineUserAdd className="adminIcon" />
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;


*/