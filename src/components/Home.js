import React from 'react';
import { fetchVerify } from '../services/auth-api';

const Home = () => {

  fetchVerify()
    .then(res => {
      if(!res._id) window.location = '/landing';
      
    });

  return <h2>Home</h2>;
};

export default Home;
