import React, {Component} from 'react';
import './OneOrderProduct.css'

class OneOrderProduct extends Component {
  render(){
  return (
    <>
    <div className="orderProduct">
      <div className="orderProductImg">
      <img src={require("./img/product-"+this.props.img+".jpg").default}></img>
      </div>
        <div productInformation>
        <div className="orderProductName">{this.props.name}</div>
        <div className="informationAboutProduct">SIZE:{this.props.size}</div>
        <div className="informationAboutProduct">x{this.props.amountOfProducts}</div>
        <div className="informationAboutProduct">{this.props.price}$</div>
      </div>
    </div>
    </>
  )}
}

export default OneOrderProduct;
