import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Navigation.css';

const Navigation = () => {
  return (
    <nav className={styles.Navigation}>
      <Link className={styles.Link} to='/'>Home</Link>
      <Link className={styles.Link} to='/register'>Register</Link>
      <Link className={styles.Link} to='/login'>Login</Link>
    </nav>
  );
};

export default Navigation;
