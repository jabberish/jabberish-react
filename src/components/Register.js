import React from 'react';
import RegisterForm from '../containers/RegisterForm';
import { fetchRegister } from '../services/auth-api';

const Register = () => {

  const submitRegister = (user) => {
    fetchRegister(user)
      .then(res => {
        console.log(res);
      });
  };
  
  return (
    <>
      <h1>Register</h1>
      <RegisterForm submitRegister={submitRegister} />
    </>
  );
};

export default Register;
