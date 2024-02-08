import React, { Component } from 'react'
import './Portfolio.css'
import Cards from '../Cards/Cards'
import Caption from '../Caption/Caption'
import Navbar from '../NavBar/Navbar'
import Footer from '../Footer/Footer'
export default class Portfolio extends Component {
    state = {
        images : [
            {imge : 'https://routeegy.github.io/startFramework/assets/images/poert1.png'},
            {imge: 'https://routeegy.github.io/startFramework/assets/images/port2.png'},
            {imge: 'https://routeegy.github.io/startFramework/assets/images/port3.png'},
            {imge : 'https://routeegy.github.io/startFramework/assets/images/poert1.png'},
            {imge: 'https://routeegy.github.io/startFramework/assets/images/port2.png'},
            {imge: 'https://routeegy.github.io/startFramework/assets/images/port3.png'},
        ]
        
    }
  render() {




    const closeScreen = () => {
     let screenLayer= document.getElementById('screenLayer')
      
      screenLayer.classList.add('d-none')
    }

    const handleCardClick = (idx) => {
      // Do something with the index when a card is clicked
      console.log('Card clicked in PortfolioList. Index:', idx);
      
      const select = this.state.images
      // const myArray = JSON.parse(JSON.stringify(this.state.images))
      // this.setState({select:myArray})

      // console.log(this.setState({select:myArray}));
      // console.log(select[0]);
    
      // for(let i = 0 ; i<select.length ; i++ ){
      //   // console.log("sssss", select[i]);
      // }
      console.log(select[idx]);

const here = select[idx].imge

let screenLayer= document.getElementById('screenLayer')
screenLayer.classList.remove("d-none")

let img = document.getElementById('img')
     img.setAttribute('src', here)



    };


    return (
      <>
      {/* <Navbar  /> */}



      
        <div className="conatiner mt-5">


          
        <Caption name = 'PORTFOLIO COMPONENT'  />



<div className="container">


<div className="screenLayer d-none   " id='screenLayer'>
<i class="fa-solid fa-xmark " id='closeMark' onClick={closeScreen}></i>
<img src="https://routeegy.github.io/startFramework/assets/images/poert1.png" className='w-100' id='img' alt="" />
</div>

        <div className="row mt-5 mb-5">
            
            {this.state.images.map((img ,idx)  => ( <Cards key={idx} index={idx}  name={img.imge} onClick={handleCardClick}   />))}
            {/* {this.state.images.map((img ,idx)  => ( <Cards key={idx} index={idx}  name={img.imge} onClick={handleCardClick}  />))} */}
            
            
        </div>
        </div>
        </div>
        {/* <Footer /> */}

      </>
    )
  }
}
