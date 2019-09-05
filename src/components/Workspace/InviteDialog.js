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

const InviteDialog = ({ open, handleCloseInvite, handleInviteUser, handleUpdate }) => {
  return (
    <Dialog 
      open={open} 
      onClose={handleCloseInvite} 
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Invite User</DialogTitle>
      <DialogContent>
        <DialogContentText>
            Input the username you would like to send an invite to.
        </DialogContentText>
        <TextField
          onChange={handleUpdate}
          autoFocus
          margin="dense"
          id="inviteInput"
          name="inviteInput"
          label="Username"
          type="text"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseInvite} color="secondary">
            Cancel
        </Button>
        <Button onClick={handleInviteUser} color="primary">
            Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};

InviteDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleCloseInvite: PropTypes.func.isRequired,
  handleInviteUser: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired
};

export default InviteDialog;
