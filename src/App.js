import './App.css';
import React, {Component} from 'react';
import Logo from './Logo';
import Products from './Products';
import WholeOrder from './WholeOrder';
import Footer from './Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends Component {
  render(){
  return (
    <Router>
      <Switch>
      <Route exact path="/">
        <Logo></Logo>
        <Products></Products>
        <Footer></Footer>
      </Route>
      <Route path="/WholeOrder" component={WholeOrder}>
      </Route>
      </Switch>
    </Router>
  )}
}

export default App;
