import React from 'react';
import PropTypes from 'prop-types';

const WorkspaceItem = ({ workspace }) => {
  return (
    <li>
      <span>{workspace.workspace.name}</span>
    </li>
  );
};

WorkspaceItem.propTypes = {
  workspace: PropTypes.object.isRequired
};

export default WorkspaceItem;
