import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Header from '../components/Header';
import Landing from '../components/Landing';
import Register from './Register';
import Login from './Login';
import Workspace from '../pages/Workspace';
import Home from './Home';

import { WithSession } from './WithSession';

import 'normalize.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/Login" component={Login}/>
        <Route path="/Register" component={Register}/>
        <Route path="/landing" component={Landing}/>
        <Route path="/workspace" component={WithSession(Workspace)}/>
        <Route path="/" component={WithSession(Home)} />
      </Switch>
    </Router>
  );
};

export default App;
