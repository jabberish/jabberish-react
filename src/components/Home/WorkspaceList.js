import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Paper, makeStyles, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  paper: {
    height: 140,
    width: 300,
    textDecoration: 'none'
  },
  control: {
    padding: theme.spacing(2),
  },
  typography: {
    textDecoration: 'none'
  },
  link: {
    textDecoration: 'none'
  }
}));

const WorkspaceList = ({ workspaces, updateWorkspace }) => {
  const classes = useStyles();

  return (
    <>
      <h3>Workspace List</h3>
      <Grid container justify="left" spacing={2}>
        {workspaces.map(({ workspace }) => (
          <Grid key={workspace._id} item>
            <Link to="./workspace" onClick={() => updateWorkspace(workspace._id)} className={classes.link}>
              <Paper className={classes.paper} >
                <Typography variant="subtitle1" className={classes.typography}>
                  {workspace.name}
                </Typography>
                <Button style={{ zIndex: 100000 }} onClick={e => e.preventDefault()}>Test</Button>
              </Paper>
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

WorkspaceList.propTypes = {
  workspaces: PropTypes.array.isRequired,
  updateWorkspace: PropTypes.func.isRequired
};

export default WorkspaceList;
