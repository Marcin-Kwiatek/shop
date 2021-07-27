import React, {Component} from 'react';
import './OneProduct.css'


class OneProduct extends Component {
  render(){
  return (
    <>
    <div className="product">
      <div className="productImg">
      <img src={require("./img/product-"+this.props.img+".jpg").default}></img>
      </div>
      <div className="productName">{this.props.name}</div>
      <div className="price">{this.props.price}</div>
    </div>
    </>
  )}
}

export default OneProduct;
