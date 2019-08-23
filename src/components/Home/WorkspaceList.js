import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Paper, makeStyles, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import CreateWorkspace from './CreateWorkspace';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: 10,
    height: 140,
    width: 300,
    textDecoration: 'none'
  },
  button: {
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
  },
  container: {
    margin: 10
  }
}));

const WorkspaceList = ({ workspaces, updateWorkspace, handleOpenDialog }) => {
  const classes = useStyles();

  return (
    <>
      <h3>Workspace List</h3>
      <Grid container className={classes.container} justify="flex-start" spacing={2}>
        {workspaces.map(({ workspace }) => (
          <Grid key={workspace._id} item>
            <Link to="./workspace" onClick={() => updateWorkspace(workspace._id)} className={classes.link}>
              <Paper className={classes.paper} >
                <Typography variant="subtitle1" className={classes.typography}>
                  {workspace.name}
                </Typography>
                <Button onClick={e => e.preventDefault()}>Test</Button>
              </Paper>
            </Link>
          </Grid>
        ))}
        <CreateWorkspace handleOpenDialog={handleOpenDialog} />
      </Grid>
    </>
  );
};

WorkspaceList.propTypes = {
  workspaces: PropTypes.array.isRequired,
  updateWorkspace: PropTypes.func.isRequired,
  handleOpenDialog: PropTypes.func.isRequired
};

export default WorkspaceList;
