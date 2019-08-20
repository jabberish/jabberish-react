import React from 'react';

import LoginForm from '../components/LoginForm';

import { fetchLogin } from '../services/auth-api';

class Login extends React.Component {
  state = {
    username: '',
    password: '',
    loginSuccess: true
  }

  handleSubmit = e => {
    e.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password
    };

    fetchLogin(user)
      .then(res => {
        if(res._id) {
          window.location = '/';
        } else {
          this.setState({ loginSuccess: false });
        }
      });
  };

  handleUpdate = e => {
    this.setState({ [e.target.name]: e.target.value });
  }
  
  render() {
    return (
      <>
        <h1>Login</h1>
        <LoginForm 
          handleSubmit={this.handleSubmit}
          handleUpdate={this.handleUpdate}
          loginSuccess={this.state.loginSuccess}
        />
      </>
    );
  }
}

export default Login;
