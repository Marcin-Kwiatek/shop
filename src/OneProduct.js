import React, {Component} from 'react';

class OneProduct extends Component {
  render(){
  return (
    <>
    <div className="product">
      <div className="productImg">
      <img src={require("./img/product-"+this.props.img+".jpg").default} onClick={this.productPurchase.bind(this)}></img>
      </div>
      <div className="productName">{this.props.name}</div>
      <div className="price">{this.props.price}$</div>
    </div>
    </>
  )}
  productPurchase(){
    this.props.productPurchase(this.props.id)
  }
}

export default OneProduct;
