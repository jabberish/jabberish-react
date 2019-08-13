import React from 'react';
import PropTypes from 'prop-types';

class RegisterForm extends React.Component {
  state = {
    username: '',
    password: ''
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.submitRegister({ username: this.state.username, password: this.state.password });
  };

  onUsernameChange = e => {
    this.setState({ username: e.target.value });
  }

  onPasswordChange = e => {
    this.setState({ password: e.target.value });
  }

  render() {
    return (
      <form id="register-form">
        <label>username:
          <input 
            id="username" 
            name="username" 
            onChange={this.onUsernameChange}
            required 
          />
        </label>
        <label>Password:
          <input 
            id="password" 
            name="password" 
            type="password" 
            onChange={this.onPasswordChange}
            required 
          />
        </label>
        <button onClick={this.onSubmit}>Submit</button>
      </form>
    );
  }
}

RegisterForm.propTypes = {
  submitRegister: PropTypes.func.isRequired
};

export default RegisterForm;
