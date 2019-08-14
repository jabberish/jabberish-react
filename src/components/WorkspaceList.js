import React from 'react';
import PropTypes from 'prop-types';

const WorkspaceList = ({ workspaces }) => {
  const workspaceList = workspaces.map((workspace, i) => {
    return <li key={i}>{workspace.workspace.name}</li>;
  });

  return (
    <>
      <h3>Workspace List</h3>
      <ul>{workspaceList}</ul>
    </>
  );
};

WorkspaceList.propTypes = {
  workspaces: PropTypes.array.isRequired
};

export default WorkspaceList;
