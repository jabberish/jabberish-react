import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';
import Landing from './Landing';
import Home from './Home';
import Register from './Register';
import Login from './Login';


export default function App() {
  return (
    <Router>
      <>
        <Header />
        <Navigation />
        <Switch>
          <Route path="/Login" component={Login}/>
          <Route path="/Register" component={Register}/>
          <Route path="/landing" component={Landing}/>
          <Route path="/" component={Home}/>
        </Switch>
      </>
    </Router>
  );
}
