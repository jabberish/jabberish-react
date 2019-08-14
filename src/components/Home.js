import React from 'react';
import { Redirect } from 'react-router';

const Home = ({ username }) => {
  console.log(username);

  if(username === false) {
    console.log('redirecting');
    return <Redirect to="/landing" />;
  }

  return (username && <h2>Home</h2>);
};

export default Home;
