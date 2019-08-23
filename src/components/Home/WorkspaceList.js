import React from 'react';
import PropTypes from 'prop-types';
import WorkspaceItem from './WorkspaceItem';

const WorkspaceList = ({ workspaces, updateWorkspace }) => {
  const workspaceList = workspaces.map(({ workspace }, i) => {
    return <WorkspaceItem key={i} workspace={workspace}  updateWorkspace={updateWorkspace} />;
  });

  return (
    <>
      <h3>Workspace List</h3>
      <ul>
        {workspaceList}
        {workspaceList}
        {workspaceList}
        {workspaceList}
        {workspaceList}
        {workspaceList}
        {workspaceList}
        {workspaceList}
        {workspaceList}
        {workspaceList}
        {workspaceList}
        {workspaceList}
        {workspaceList}
      </ul>
    </>
  );
};

WorkspaceList.propTypes = {
  workspaces: PropTypes.array.isRequired,
  updateWorkspace: PropTypes.func.isRequired
};

export default WorkspaceList;
