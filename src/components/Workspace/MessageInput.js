import React from 'react';
import PropTypes from 'prop-types';
import { Toolbar, Input, Button, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  appBar: {
    position: 'fixed',
    top: 'auto',
    bottom: 0,
    width: 'calc(100% - 220px)',
  },
  input: {
    flexGrow: 1
  }
}));

const MessageInput = ({ onSubmitMessage, onUpdateMessageInput, messageInput }) => {

  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} color="inherit">
      <Toolbar>
        <Input 
          className={classes.input} 
          placeholder="Message" 
          onChange={onUpdateMessageInput} 
          value={messageInput} 
          autoComplete="off" 
        />
        <Button onClick={onSubmitMessage}>Send</Button>
      </Toolbar>
    </AppBar>
  );
};

MessageInput.propTypes = {
  onSubmitMessage: PropTypes.func.isRequired,
  onUpdateMessageInput: PropTypes.func.isRequired,
  messageInput: PropTypes.string.isRequired
};

export default MessageInput;
