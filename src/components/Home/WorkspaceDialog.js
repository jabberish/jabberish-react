import React from 'react';
import PropTypes from 'prop-types';

import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions, 
  DialogContentText, 
  Button, 
  TextField } from '@material-ui/core';

const WorkspaceDialog = ({ open, handleCloseDialog, handleCreateWorkspace, handleUpdate }) => {
  return (
    <Dialog 
      open={open} 
      onClose={handleCloseDialog} 
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Create Workspace</DialogTitle>
      <DialogContent>
        <DialogContentText>
            Please provide a name for your new workspace.
        </DialogContentText>
        <TextField
          onChange={handleUpdate}
          autoFocus
          margin="dense"
          id="newWorkspaceName"
          name="newWorkspaceName"
          label="Workspace name"
          type="text"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseDialog} color="secondary">
            Cancel
        </Button>
        <Button onClick={handleCreateWorkspace} color="primary">
            Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};

WorkspaceDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleCloseDialog: PropTypes.func.isRequired,
  handleCreateWorkspace: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired
};

export default WorkspaceDialog;
