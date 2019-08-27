import React from 'react';
import { Typography } from '@material-ui/core';
import AllWorkspaces from '../containers/AllWorkspaces';

const Home = () => {
  return (
    <>
      <Typography variant="h4">Workspaces</Typography>
      <AllWorkspaces />
    </>
  );
};

export default Home;
