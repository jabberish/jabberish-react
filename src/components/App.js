import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';
import Landing from './Landing';
import Home from './Home/Home';
import Register from './Register';
import Login from './Login';
import Workspace from './Workspace/Workspace';

import { fetchVerify } from '../services/auth-api';

class App extends React.Component {
  state = {
    username: '',
    userId: '',
    redirect: false,
    currentWorkspace: ''
  }

  componentDidMount() {
    this.checkAuth();
  }

  checkAuth() {
    fetchVerify()
      .then(res => {
        if(res._id) {
          this.setState({ username: res.username, userId: res._id });
        } else {
          this.setState({ redirect: true });
        }
      });
  }

  updateWorkspace = (workspaceId) => {
    this.setState({ currentWorkspace: workspaceId });
  }
  
  render() {
    const { currentWorkspace, userId, redirect } = this.state;
    return (
      <Router>
        <Header redirect={redirect}/>
        <Navigation />
        <Switch>
          <Route path="/Login" component={Login}/>
          <Route path="/Register" component={Register}/>
          <Route path="/landing" component={Landing}/>
          <Route 
            path="/workspace"   
            render={(props) => <Workspace 
              {...props} 
              currentWorkspace={currentWorkspace} 
              userId={userId} 
            />}
          />
          <Route 
            path="/" 
            render={(props) => <Home {...props} updateWorkspace={this.updateWorkspace} />}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
