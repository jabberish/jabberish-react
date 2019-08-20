import React from 'react';
import PropTypes from 'prop-types';

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

const labelStyle = {
  marginBottom: '10px'
};

const LoginForm = ({ handleSubmit, handleUpdate, loginSuccess }) => {
  return (
    <form id="login-form" style={formStyle}>
      <label style={labelStyle}>username:
        <input 
          id="username" 
          name="username" 
          onChange={handleUpdate}
          required 
        />
      </label>
      <label style={labelStyle}>Password:
        <input 
          id="password" 
          name="password" 
          type="password" 
          onChange={handleUpdate}
          required 
        />
      </label>
      {!loginSuccess && (
        <span>Incorrect username or password!</span>
      )}
      <button onClick={handleSubmit} style={{ width: '5rem' }}>Submit</button>
    </form>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired,
  loginSuccess: PropTypes.bool.isRequired
};

export default LoginForm;
