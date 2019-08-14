import React from 'react';
import { Redirect } from 'react-router';

const Home = ({ username }) => {
  if(username === false) {
    return <Redirect to="/landing" />;
  }

  return (username && <h2>Home</h2>);
};

export default Home;
