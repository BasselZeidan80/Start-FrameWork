import React, { Component } from 'react'
import './Caption.css'
export default class Caption extends Component {
  render() {
    return (
      <>
      <div className="container " >
        <div className="parentCap ">
       <div className="caption mt-5 fw-bold ">
                <h1 className={this.props.bgC}>{this.props.name }</h1>
                </div>
            </div>
            
        <div className="lines">
          <div className= {"lineOne "+ this.props.color}></div>
          <i className={"fa-solid fa-star fs-4 text-dark " + this.props.clr}></i>
          <div className={"lineTwo " + this.props.color}></div>
        </div>
        </div>

      </>
    )
  }
}
