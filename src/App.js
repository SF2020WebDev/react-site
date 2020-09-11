import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/home'
import SignUpPage from './pages/signup/signupFunctions';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={SignUpPage} />
        <Route path='/home' component={Home} />
        <Route path='/checkout' component={Checkout} />
        <Route path='/confirmation' component={Confirmation} />
        <Route path='/item/:id' component={Item}/>
      </Switch>
    </Router>
  );
}

export default App;
