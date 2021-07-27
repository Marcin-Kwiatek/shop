import './Products.css';
import React, {Component} from 'react';
import OneProduct from './OneProduct';


class Products extends Component {
  constructor(props){
    super(props)
    this.productPurchase = this.productPurchase.bind(this)
    this.addingToBag = this.addingToBag.bind(this)
    this.onChangeAmountOfProducts = this.onChangeAmountOfProducts .bind(this)
}
  state={
    visibiltyAddToBag:false,
    inputValue:'',
    amountOfProducts:1,
    products:[
      {img:1,name:"T-shirt Puma Red",price:"99zł"},
      {img:2,name:"Shoes HRX Black",price:"199zł"},
      {img:3,name:"Pants Gray ",price:"129zł"},
      {img:4,name:"T-shirt Puma Blue",price:"109zł"},
      {img:5,name:"Shoes Gray",price:"169zł"},
      {img:6,name:"T-shirt Puma Black",price:"99zł"},
      {img:7,name:"Socks HRX 3 Pairs",price:"69zł"},
      {img:8,name:"Watch Fossil Black",price:"499zł"},
      {img:9,name:"Watch Roadster Black",price:"599zł"},
      {img:10,name:"Shoes X Black ",price:"219zł"},
      {img:11,name:"Shoes Roadster Gray",price:"159zł"},
      {img:12,name:"Pants Nike Black",price:"149zł"},
    ]
  }
  render(){
  return (
    <>
    {this.state.visibiltyAddToBag &&
    <div className="amountOfProducts">
        <input className="amountOfProductsInput" onChange={this.onChangeAmountOfProducts} value={this.state.amountOfProducts} type="number" max="10" min="1" placeholder="enter the number of products"></input>
        <button onClick={this.addingToBag} className="addToBagButton">ADD TO BAG</button>
      </div>}
      <div className="allProducts">
        {this.state.products.map((product) => <OneProduct img={product.img} name={product.name} price={product.price}
         id={product.id} ></OneProduct>)}     
    </div>
    </>
  )} 
  productPurchase(event){
    this.setState({visibiltyAddToBag:true})
    console.log(event)
  }
  addingToBag(){
    this.setState({visibiltyAddToBag:false})
  }
  onChangeAmountOfProducts(event){
    this.setState({amountOfProducts:event.target.value})
  }
}

export default Products;