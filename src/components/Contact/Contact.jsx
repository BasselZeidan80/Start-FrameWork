import React, { Component } from 'react'
import Caption from '../Caption/Caption'
import Navbar from '../NavBar/Navbar'
import Footer from '../Footer/Footer'

export default class Contact extends Component {
  render() {
    return (
      <>
      {/* <Navbar  /> */}
      <div className="conatiner mt-5">
        <Caption name={'CONATCT SECTION'} />
        </div>
        <div className="container ">
            <div className="form  mb-3 w-75 mt-5  mx-auto">
        <div class="form-floating mb-5">
            <input type="text" class="form-control mb-3" id="floatingInput" placeholder="User Name" />
            <label htmlFor="floatingInput">User Name</label>
        </div>
        <div class="form-floating mb-5">
            <input type="number" class="form-control mb-3" id="floatingInput" placeholder="User Age" />
            <label htmlFor="floatingInput">User Age</label>
        </div>
        <div class="form-floating mb-5">
            <input type="email" class="form-control mb-3" id="floatingInput" placeholder="User Email" />
            <label htmlFor="floatingInput">User Email</label>
        </div>
        <div class="form-floating mb-5">
            <input type="password" class="form-control mb-3" id="floatingInput" placeholder="User password" />
            <label htmlFor="floatingInput">User Password</label>
        </div>


        {/* <div class="form-floating mb-3 w-75 mt-5  mx-auto">
            <input type="number" class="form-control mb-3" id="floatingInput" placeholder="User Name" />
            <label for="floatingInput">User Age</label>
            
            
        </div>
        <div class="form-floating mb-3 w-75 mt-5  mx-auto">
            <input type="email" class="form-control mb-3" id="floatingInput" placeholder="User Name" />
            <label for="floatingInput">User Email</label>
            
            
        </div>
        <div class="form-floating mb-3 w-75 mt-5  mx-auto">
            <input type="Password" class="form-control mb-3" id="floatingInput" placeholder="User Name" />
            <label for="floatingInput">User Password</label>
        </div> */}
        </div>

        <button className='btn btn-success p-3 mb-5'>Send message</button>
</div>

{/* <Footer /> */}
      
      </>
    )
  }
}
