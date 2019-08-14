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
import Workspace from './Workspace';

import { fetchVerify } from '../services/auth-api';

class App extends React.Component {
  state ={
    username: '',
    redirect: false
  }

  componentDidMount() {
    this.checkAuth();
  }

  checkAuth() {
    fetchVerify()
      .then(res => {
        if(res._id) {
          this.setState({ username: res.username });
        } else {
          this.setState({ redirect: true });
        }
      });
  }
  
  render() {
    return (
      <Router>
        <Header redirect={this.state.redirect}/>
        <Navigation />
        <Switch>
          <Route path="/Login" component={Login}/>
          <Route path="/Register" component={Register}/>
          <Route path="/landing" component={Landing}/>
          <Route path="/workspace" component={Workspace}/>
          <Route path="/" component={Home}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
