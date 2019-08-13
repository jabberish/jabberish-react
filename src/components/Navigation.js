import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/landing'>Landing</Link>
      <Link to='/Register'>Register</Link>
    </nav>
  );
};

export default Navigation;
