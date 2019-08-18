import React from 'react';

import Typography from '@material-ui/core/Typography';

import Navigation from './Navigation';

import styles from './Header.css';

const Header = () => {
  return (
    <section className={styles.Header}>
      <Typography variant="h5">Jabberish</Typography>
      <Navigation />
    </section>
  );
};

export default Header;
