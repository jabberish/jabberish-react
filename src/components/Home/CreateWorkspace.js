import React from 'react';
import PropTypes from 'prop-types';

import { Grid, makeStyles, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  button: {
    height: 140,
    width: 300,
    textDecoration: 'none'
  }
}));

const CreateWorkspace = ({ handleOpenDialog }) => {
  const classes = useStyles();
  return (
    <Grid item>
      <Button 
        className={classes.button} 
        onClick={handleOpenDialog} 
        variant="outlined" 
        color="primary"
      >
        <Typography variant="subtitle1" className={classes.typography}>
        Create Workspace
        </Typography>
      </Button>
    </Grid>
  );
};

CreateWorkspace.propTypes = {
  handleOpenDialog: PropTypes.func.isRequired
};

export default CreateWorkspace;
