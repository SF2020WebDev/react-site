import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/home'
import SignUpPage from './pages/signup/signup';
import ItemDetails from './context/item';
import Item from './pages/item/item'
import Checkout from './pages/checkout/checkout.js';
import Confirmation from './pages/confirmation/confirmation.js'
import ContextSource from './context/root';
import './App.css'
function App() {
  return (
    <ContextSource>
      <Router>
        <Switch>
          <Route path='/' exact component={SignUpPage} />
          <Route path='/home' component={Home} />
          <Route path='/checkout' component={Checkout} />
          <Route path='/confirmation' component={Confirmation} />
          <Route path='/item/:id' component={Item} />
        </Switch>
      </Router>
    </ContextSource>
  );
}

export default App;
