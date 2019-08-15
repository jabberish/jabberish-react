import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const WorkspaceItem = ({ workspace }) => {
  const url = `./workspace#workspace=${workspace.workspace._id}`;
  return (
    <li>
      <Link to={url}>
        <h3>{workspace.workspace.name}</h3>
      </Link>
    </li>
  );
};

WorkspaceItem.propTypes = {
  workspace: PropTypes.object.isRequired
};

export default WorkspaceItem;
