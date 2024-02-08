import React, { Component } from 'react'
import '../Portfolio/Portfolio.css'
export default class Cards extends Component {

  componentDidMount() {
    // Your logic here
    console.log('Component did mount');


  }

  componentDidUpdate(prevProps, prevState) {
    // Your logic here
    console.log('Component did update');
  }

 
  handleClick = () => {
    const { index, onClick } = this.props;

    // You can do something with the index here
    console.log('Clicked on card with index:', index);

    


    
    // Optionally, you can call a function passed through props
    if (onClick) {
      onClick(index);
    }


  };






  render() {
    return (
      <>
     
         <div className=" col-sm-12 col-md-6 col-lg-4 mt-5">
            <div className="cardImage  " onClick={this.handleClick}>
                <img src={this.props.name} className='w-100 rounded' alt="home" />
                <div className="layer">
                <i className="fa-solid fa-plus"></i>
                </div>
            </div>

            </div>

      </>
    )
  }
}
