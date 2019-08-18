import React from 'react';
import PropTypes from 'prop-types';
import { AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    marginLeft: '220px',
    width: 'calc(100% - 220px)',
  },
}));

const MessageInput = ({ onSubmitMessage, onUpdateMessageInput, messageInput }) => {

  const classes = useStyles();

  return (
    <AppBar position="fixed" color="inherit" className={classes.appBar}>
      <form onSubmit={onSubmitMessage}>
        <input onChange={onUpdateMessageInput} value={messageInput} autoComplete="off" />
        <button>Send</button>
      </form>
    </AppBar>
  );
};

MessageInput.propTypes = {
  onSubmitMessage: PropTypes.func.isRequired,
  onUpdateMessageInput: PropTypes.func.isRequired,
  messageInput: PropTypes.string.isRequired
};

export default MessageInput;
