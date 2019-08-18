import React from 'react';

import Navigation from './Navigation';

import styles from './Header.css';

import { Toolbar, AppBar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const Header = () => {
  return (
    <AppBar className={styles.Header}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-lable="menu">
          <MenuIcon></MenuIcon>
        </IconButton>
        <Typography variant="h6">
          Jabberish
        </Typography>
        <Navigation/>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
