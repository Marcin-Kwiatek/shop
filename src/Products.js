import './Products.css';
import React, {Component} from 'react';


class Products extends Component {
  constructor(props){
    super(props)
    this.productPurchase = this.productPurchase.bind(this)
    this.addingToBag = this.addingToBag.bind(this)
}
  state={
    display:"none",
    inputValue:''
  }
  render(){
  return (
    <>
    <div style={{display:this.state.display}} className="amountOfProducts">
        <input className="amountOfProductsInput" type="number" max="10" min="1" placeholder="enter the number of products"></input>
        <button onClick={this.addingToBag} className="addToBagButton">ADD TO BAG</button>
      </div>
    <div className="allProducts">
      <div className="product">
      <div className="productImg"><img src={require("./img/product-1.jpg").default} onClick={this.productPurchase} ></img></div>
      <div className="productName">T-shirt Puma Red </div>
      <div className="price">99zł</div>
      </div>
      <div className="product">
      <div className="productImg"><img src={require("./img/product-2.jpg").default} onClick={this.productPurchase} ></img></div>
      <div className="productName">Shoes HRX Black </div>
      <div className="price">199zł</div>
      </div>
      <div className="product">
      <div className="productImg"><img src={require("./img/product-3.jpg").default} onClick={this.productPurchase} ></img></div>
      <div className="productName">Pants Gray </div>
      <div className="price">129zł</div>
      </div>
      <div className="product">
      <div className="productImg"><img src={require("./img/product-4.jpg").default} onClick={this.productPurchase} ></img></div>
      <div className="productName">T-shirt Puma Blue </div>
      <div className="price">109zł</div>
      </div>
      <div className="product">
      <div className="productImg"><img src={require("./img/product-5.jpg").default} onClick={this.productPurchase} ></img></div>
      <div className="productName">Shoes Gray </div>
      <div className="price">169zł</div>
      </div>
      <div className="product">
      <div className="productImg"><img src={require("./img/product-6.jpg").default} onClick={this.productPurchase} ></img></div>
      <div className="productName">T-shirt Puma Black</div>
      <div className="price">99zł</div>
      </div>
      <div className="product">
      <div className="productImg"><img src={require("./img/product-7.jpg").default} onClick={this.productPurchase} ></img></div>
      <div className="productName">Socks HRX 3 Pairs</div>
      <div className="price">69zł</div>
      </div>
      <div className="product">
      <div className="productImg"><img src={require("./img/product-8.jpg").default} onClick={this.productPurchase} ></img></div>
      <div className="productName">Watch Fossil Black</div>
      <div className="price">499zł</div>
      </div>
      <div className="product">
      <div className="productImg"><img src={require("./img/product-9.jpg").default} onClick={this.productPurchase} ></img></div>
      <div className="productName">Watch Roadster Black</div>
      <div className="price">599zł</div>
      </div>
      <div className="product">
      <div className="productImg"><img src={require("./img/product-10.jpg").default} onClick={this.productPurchase} ></img></div>
      <div className="productName">Shoes X Black </div>
      <div className="price">219zł</div>
      </div>
      <div className="product">
      <div className="productImg"><img src={require("./img/product-11.jpg").default} onClick={this.productPurchase} ></img></div>
      <div className="productName">Shoes Roadster Gray</div>
      <div className="price">159zł</div>
      </div>
      <div className="product">
      <div className="productImg"><img src={require("./img/product-12.jpg").default} onClick={this.productPurchase} ></img></div>
      <div className="productName">Pants Nike Black</div>
      <div className="price">149zł</div>
      </div>
    </div>
    </>
  )} 
  productPurchase(event){
    this.setState({display:"inline"})
    console.log(event)
  }
  addingToBag(){
    this.setState({display:"none"})
  }
}

export default Products;
