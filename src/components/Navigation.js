import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Navigation.css';
import { Button } from '@material-ui/core';

const Navigation = () => {
  return (
    <nav className={styles.Navigation}>
      <Button color="inherit"><Link className={styles.Link} to='/'>Home</Link></Button>
      <Button color="inherit"><Link className={styles.Link} to='/register'>Register</Link></Button>
      <Button color="inherit"><Link className={styles.Link} to='/login'>Login</Link></Button>
    </nav>
  );
};

export default Navigation;
