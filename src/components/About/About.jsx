import React, { Component } from 'react'
import Caption from '../Caption/Caption'
import './About.css'
import Navbar from '../NavBar/Navbar'
import Footer from '../Footer/Footer'
export default class About extends Component {
  render() {
    return (
      <>
      {/* <Navbar  /> */}
      <div className="about" id='about'>
      <div className="container mt-5 " >
         <Caption name={'ABOUT COMPONENT'} color={'bg-white'} clr={'text-white'} />
 

            <div className="row mt-5  ">
                <div className="col-lg-6 ">
                    <p className='fs-4 '>
                    Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.


                    </p>
                </div>
                <div className="col-lg-6 ">
                    <p className='fs-4 '>
                    Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.

                    </p>
                </div>
            </div>

         </div>
         </div>
  {/* <Footer /> */}

      </>
    )
  }
}
