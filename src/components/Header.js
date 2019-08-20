import React from 'react';

import Navigation from './Navigation';

import { Toolbar, AppBar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    flexGrow: 1,
  },
  title: {
    flexGrow: 1
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} position='sticky'>
      <Toolbar>
        <Typography className={classes.title} variant="h6">
          Jabberish
        </Typography>
        <Navigation/>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
