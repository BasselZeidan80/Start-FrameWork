import React, { Component } from 'react'
import Navbar from '../NavBar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

export default class Layout extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="design   ">
        <Outlet/>
        </div>
        <Footer />
      </div>
    )
  }
}
