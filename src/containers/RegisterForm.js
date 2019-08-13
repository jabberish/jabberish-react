import React from 'react';
import { fetchRegister } from '../services/auth-api';

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

const labelStyle = {
  marginBottom: '10px'
};

class RegisterForm extends React.Component {
  state = {
    username: '',
    password: '',
    registerSuccess: true
  }

  onSubmit = e => {
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

  onUsernameChange = e => {
    this.setState({ username: e.target.value });
  }

  onPasswordChange = e => {
    this.setState({ password: e.target.value });
  }

  render() {
    return (
      <form id="register-form" style={formStyle}>
        <label style={labelStyle}>username:
          <input 
            id="username" 
            name="username" 
            onChange={this.onUsernameChange}
            required 
          />
        </label>
        <label style={labelStyle}>Password:
          <input 
            id="password" 
            name="password" 
            type="password" 
            onChange={this.onPasswordChange}
            required 
          />
        </label>
        {!this.state.registerSuccess && (
          <span>That username is taken. Please try another!</span>
        )}
        <button onClick={this.onSubmit} style={{ width: '5rem' }}>Submit</button>
      </form>
    );
  }
}

export default RegisterForm;
