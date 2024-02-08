import React, { Component } from 'react'
import './Footer.css'
export default class Footer extends Component {
  render() {
    return (
      <>
       <div className="footer" id='footer'>
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="firstRow">
                        <h3>LOCATION</h3>
                        <p>2215 John Daniel Drive</p>
                        <p>Clark, MO 65243</p>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="firstRow">
                        <h2>AROUND THE WEB</h2>
                       <div className="icons">
                       <i class="fa-brands fa-facebook"></i>
                       <i class="fa-brands fa-twitter"></i>
                       <i class="fa-brands fa-linkedin"></i>
                       <i class="fa-solid fa-globe"></i>
                       </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="firstRow">
                        <h2>ABOUT FREELANCER</h2>
                      <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>
                </div>
                
            </div>

        </div>
       
        </div> 
        <div className="lastFooter" id='lastFooter'>
        <div className="container">
        <p className='fs-4'>Copyright © Your Website 2021</p>
        </div>
        </div>
      </>
    )
  }
}
