import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Header from './Header';
import Landing from './Landing';
import Register from '../containers/Register';
import Login from '../containers/Login';
import Workspace from '../pages/Workspace';
import Home from '../containers/Home';

import { WithSession } from '../containers/WithSession';

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
