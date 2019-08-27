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
import Workspace from './Workspace';

import 'normalize.css';

import { fetchVerify } from '../services/auth-api';
import AllWorkspaces from './AllWorkspaces';

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
          <Route path="/" component={AllWorkspaces} />
        </Switch>
      </Router>
    );
  }
}

export default App;
