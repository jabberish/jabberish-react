import React from 'react';

import AuthForm from '../components/AuthForm';

import { fetchLogin } from '../services/auth-api';

class Login extends React.Component {
  state = {
    username: '',
    password: '',
    loginSuccess: true,
    failMessage: 'Incorrect username or password!'
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
        <AuthForm 
          formTitle="Login"
          handleSubmit={this.handleSubmit}
          handleUpdate={this.handleUpdate}
          success={this.state.loginSuccess}
          failMessage={this.state.failMessage}
        />
      </>
    );
  }
}

export default Login;
