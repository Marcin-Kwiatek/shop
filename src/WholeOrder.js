import React, {Component} from 'react';
import './WholeOrder.css'
import {Link} from "react-router-dom";
import OneOrderProduct from './OneOrderProduct';



class WholeOrder extends Component {
  state={
    total:0,
    wholeOrder:this.props.location.state.wholeOrder
  }
  render(){
  return (
    <>
      <div className="title">Shopping bag</div>
      <div className="allOrderProducts">
        {this.state.wholeOrder.map((product) => <OneOrderProduct key={product.id} img={product.img} name={product.name} price={product.price}
        id={product.id} productPurchase={this.productPurchase} size={product.size} amountOfProducts={product.amountOfProducts}></OneOrderProduct>)}     
      </div>
      <div className='total'>TOTAL:{this.state.total}$ </div>
      <Link to={"/"}><button className="button">BACK TO SHOPPING</button></Link>
      <button className="button">CHECKOUT</button>
    </>
  )}
  componentDidMount(){
    let total = 0
    for(let i=0;i<this.state.wholeOrder.length;i++){
    total=total+parseInt(this.state.wholeOrder[i].price)*this.state.wholeOrder[i].amountOfProducts
    }
    this.setState({total:total})
  }
}

export default WholeOrder;
