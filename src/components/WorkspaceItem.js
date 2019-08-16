import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const WorkspaceItem = ({ workspace, updateWorkspace }) => {
  console.log(workspace);
  return (
    <li>
      <Link to="./workspace" onClick={() => updateWorkspace(workspace._id)}>
        <h3>{workspace.name}</h3>
      </Link>
    </li>
  );
};

WorkspaceItem.propTypes = {
  workspace: PropTypes.object.isRequired,
  updateWorkspace: PropTypes.func.isRequired
};

export default WorkspaceItem;
