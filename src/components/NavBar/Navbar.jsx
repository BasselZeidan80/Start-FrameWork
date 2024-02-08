import React, { Component } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
export default class Navbar extends Component {
  render() {
    return <>
   

   {/* <nav  className="navbar  cstNav p-4 navbar-expand-lg  " >
  <div className="container">
    <Link className="navbar-brand fs-3" to="/">START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active rounded-3 " aria-current="page" to="/About">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link  rounded-3" to="/Portfolio">Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Contact">Contact</Link>
        </li>
       

       
        
      </ul>
      
    </div>
  </div>
</nav> */}




<nav className="navbar cstNav p-4 navbar-expand-lg">
  <div className="container">
    <Link exact className="navbar-brand fs-3" activeClassName="active" to="/">
      START FRAMEWORK
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link rounded-3" activeClassName="active" to="/About">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link rounded-3" activeClassName="active" to="/Portfolio">
            Portfolio
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link rounded-3" activeClassName="active" to="/Contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>









    
    </>
}}





