import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/home'
import SignUpPage from './pages/signup/signupFunctions'

function App() {
  return (
    <div>
        <SignUpPage />
        <Router>
          <Switch>
            <Route path='/home' component={Home} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
