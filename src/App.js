import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import "./assets/vendors/bootstrap/bootstrap.min.css"
import "./assets/vendors/fontawesome/css/all.min.css"
import "./assets/vendors/themify-icons/themify-icons.css"
import "./assets/vendors/nice-select/nice-select.css"
import "./assets/vendors/owl-carousel/owl.theme.default.min.css"
import "./assets/vendors/owl-carousel/owl.carousel.min.css"
import './assets/css/style.css'

import Home from './page/Home'
import Cart from './page/Cart'
import Category from './page/Category'
import Checkout from './page/Checkout'
import Confirmation from './page/Confirmation'
import Contact from './page/Contact'
import Login from './page/Login'
import Register from './page/Register'
import SingleBlog from './page/SingleBlog'
import SingleProduct from './page/SingleProduct'
import TrackingOrder from './page/TrackingOrder'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/category">
            <Category />
          </Route>
          <Route exact path="/checkout">
            <Checkout />
          </Route>
          <Route exact path="/confirmation">
            <Confirmation />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/single-blog">
            <SingleBlog />
          </Route>
          <Route exact path="/single-product">
            <SingleProduct />
          </Route>
          <Route exact path="/tracking-order">
            <TrackingOrder />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
