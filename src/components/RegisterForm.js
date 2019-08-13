import React from 'react';

const RegisterForm = () => {
  return (
    <form id="register-form">
      <label>username:
        <input id="username" name="username" required />
      </label>
      <label>Password:
        <input id="password" name="password" type="password" required />
      </label>
      <button>Submit</button>
    </form>
  );
};

export default RegisterForm;
