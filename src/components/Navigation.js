import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Navigation.css';
import { Button } from '@material-ui/core';

const Navigation = () => {
  return (
    <nav className={styles.Navigation}>
      <Link className={styles.Link} to='/'><Button color="inherit">Home</Button></Link>
      <Link className={styles.Link} to='/register'><Button color="inherit">Register</Button></Link>
      <Link className={styles.Link} to='/login'><Button color="inherit">Login</Button></Link>
    </nav>
  );
};

export default Navigation;
