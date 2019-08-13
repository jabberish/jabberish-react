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


export default function App() {
  return (
    <Router>
      <>
        <Header />
        <Navigation />
        <Switch>
          <Route path="/landing" component={Landing}/>
          <Route path="/" component={Home}/>
        </Switch>
      </>
    </Router>
  );
}
