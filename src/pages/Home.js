import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import AllWorkspaces from '../containers/AllWorkspaces';

const Home = () => {
  return (
    <>
      <Typography variant="h4">Workspaces</Typography>
      <AllWorkspaces history={history} />
    </>
  );
};

Home.propTypes = {
  workspaces: PropTypes.array.isRequired,
  history: PropTypes.array.isRequired
};
