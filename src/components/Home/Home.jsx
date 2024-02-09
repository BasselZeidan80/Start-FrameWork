import React, { Component } from 'react'
import './Home.css'
import Caption from '../Caption/Caption'
export default class Home extends Component {






  render() {




    return <>


{/* <Navbar  /> */}
    <div className="hero">
      <div className="container">
        
          <div className="card mt-4  ">
            <div className="image ">
            <img src="https://routeegy.github.io/startFramework/assets/images/avataaars.svg" className='w-100' alt="" />
            </div>
          </div>

 

    <Caption bgC={'text-white'} name={'START FRAMEWORK'} color={'bg-white'} clr={'text-white'} />

      

                      <div className="text fs-4 text-white mt-2">
                      <p>Graphic Artist - Web Designer - Illustrator</p>
                    </div>

                </div>
              </div>
              
    {/* <Navbar /> */}
    
  {/* <Footer /> */}

    </>
  }
}
