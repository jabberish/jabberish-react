import React from 'react';

import AuthForm from '../components/AuthForm';

import { fetchRegister } from '../services/auth-api';

class Register extends React.Component {
  state = {
    username: '',
    password: '',
    registerSuccess: true,
    failMessage: 'That username is taken. Please try another!'
  }

  handleSubmit = e => {
    e.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password
    };

    fetchRegister(user)
      .then(res => {
        if(res._id) {
          window.location = '/';
        } else {
          this.setState({ registerSuccess: false });
        }
      });
  };

  handleUpdate = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <>
        <h1>Register</h1>
        <AuthForm 
          formTitle="Register"
          handleSubmit={this.handleSubmit}
          handleUpdate={this.handleUpdate}
          success={this.state.registerSuccess}
          failMessage={this.state.failMessage}
        />
      </>
    );
  }
}

export default Register;
