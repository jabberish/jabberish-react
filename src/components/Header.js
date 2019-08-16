import React from 'react';

import Navigation from './Navigation';

import styles from './Header.css';

const Header = () => {
  return (
    <section className={styles.Header}>
      <h1>Jabberish</h1>
      <Navigation />
    </section>
  );
};

export default Header;
