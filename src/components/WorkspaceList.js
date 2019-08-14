import React from 'react';
import PropTypes from 'prop-types';
import WorkspaceItem from './WorkspaceItem';

const WorkspaceList = ({ workspaces }) => {
  const workspaceList = workspaces.map((workspace, i) => {
    return <WorkspaceItem key={i} workspace={workspace} />;
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
