import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/home'
import SignUpPage from './pages/signup/signupFunctions';
import ContextSource from './context/root'

function App() {
  return (
    <ContextSource>
      <Router>
        <Switch>
          <Route path='/' component={SignUpPage} />
          <Route path='/home' component={Home} />
          <Route path='/checkout' component={Checkout} />
          <Route path='/confirmation' component={Confirmation} />
          <Route path='/item/:id' component={Item}/>
        </Switch>
      </Router>
    </ContextSource>
  );
}

export default App;
