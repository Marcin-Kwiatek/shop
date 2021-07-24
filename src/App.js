import './App.css';
import React, {Component} from 'react';
import Logo from './Logo';
import Products from './Products';
import Footer from './Footer'
import OrderingButton from './OrderingButton'

class App extends Component {
  render(){
  return (
    <>
      <Logo></Logo>
      <Products></Products>
      <OrderingButton></OrderingButton>
      <Footer></Footer>
      </>
  )}
}

export default App;
