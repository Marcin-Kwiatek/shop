import './Products.css';
import React, {Component} from 'react';
import OneProduct from './OneProduct';
import {Link} from "react-router-dom";

class Products extends Component {
  constructor(props){
    super(props)
    this.productPurchase = this.productPurchase.bind(this)
    this.addingToBag = this.addingToBag.bind(this)
    this.onChangeAmountOfProducts = this.onChangeAmountOfProducts.bind(this)
    this.onChangeSize = this.onChangeSize.bind(this)

}
  state={
    visibiltyAddToBag:false,
    amountOfProducts:1,
    wholeOrder:[],
    size:'S',
    idClickedImage:'',
    topAddedProduct:'10%',
    products:[
      {img:1,name:"T-shirt Puma Red",id:"1", price:"99"},
      {img:2,name:"Shoes HRX Black",id:"2", price:"199"},
      {img:3,name:"Pants Gray ",id:"3", price:"129"},
      {img:4,name:"T-shirt Puma Blue",id:"4", price:"109"},
      {img:5,name:"Shoes Gray",id:"5", price:"169"},
      {img:6,name:"T-shirt Puma Black",id:"6", price:"99"},
      {img:7,name:"Socks HRX 3 Pairs",id:"7", price:"69"},
      {img:8,name:"Watch Fossil Black",id:"8", price:"499"},
      {img:9,name:"Watch Roadster Black",id:"9", price:"599"},
      {img:10,name:"Shoes X Black ",id:"10", price:"219"},
      {img:11,name:"Shoes Roadster Gray",id:"11", price:"159"},
      {img:12,name:"Pants Nike Black",id:"12", price:"149"},
    ]
  }
  render(){
  return (
    <>
    {this.state.visibiltyAddToBag &&
    <div className="amountOfProducts" style={{top:this.state.topAddedProduct}}>
        <img src={require("./img/product-"+this.state.idClickedImage+".jpg").default}></img>
        <div className="productDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptatem maiores porro provident, iusto fuga,
           laboriosam repellendus vel distinctio velit ut vero, perspiciatis ducimus illum excepturi autem consequuntur eveniet
            voluptas.</div>
        <select className="sizeInput" onChange={this.onChangeSize} value={this.state.size}>
          <option>S</option>
          <option>M</option>
          <option>L</option>
          <option>XL</option>
        </select>
        <input className="amountOfProductsInput" onChange={this.onChangeAmountOfProducts} value={this.state.amountOfProducts}
         type="number" max="10" min="1" placeholder="enter the number of products"></input>
        <button onClick={this.addingToBag} className="addToBagButton" >ADD TO BAG</button>
      </div>}
      <div className="allProducts">
        {this.state.products.map((product) => <OneProduct key={product.id} img={product.img} name={product.name} price={product.price}
         id={product.id} productPurchase={this.productPurchase} ></OneProduct>)}     
    </div>
    <Link to={{
      pathname:"/WholeOrder",
      state:{wholeOrder:this.state.wholeOrder}
      }}><button className="OrderingButton">GO TO BAG</button></Link>
    </>
  )} 
  productPurchase(id){
    let topAddedProduct = (Math.ceil(id/3)-1)*65+10 + "%"
    this.setState({topAddedProduct:topAddedProduct, visibiltyAddToBag:true, idClickedImage:id}) 
  }
  addingToBag(){
    let {amountOfProducts,idClickedImage,size} = this.state
    let previousOrder = this.state.wholeOrder
    let addedProduct = this.state.products.find(function (item){    
      return item.id === idClickedImage
    })
    addedProduct.amountOfProducts=amountOfProducts
    addedProduct.size=size
    console.log(addedProduct)

    let wholeOrder = [...previousOrder, addedProduct]
    this.setState({wholeOrder:wholeOrder,visibiltyAddToBag:false})
  }
  onChangeAmountOfProducts(event){
    this.setState({amountOfProducts:event.target.value})
  }
  onChangeSize(event){
    this.setState({size:event.target.value})
  }
}

export default Products;