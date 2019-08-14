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

import { fetchVerify } from '../services/auth-api';

class App extends React.Component {
  state ={
    username: null,
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
          this.setState({ username: false });
        }
      });
  }
  
  render() {
    return (
      <Router>
        <Header />
        <Navigation />
        <Switch>
          <Route path="/Login" component={Login}/>
          <Route path="/Register" component={Register}/>
          <Route path="/landing" component={Landing}/>
          <Route 
            path="/"
            render={(props) => <Home {...props} username={this.state.username}/>}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
