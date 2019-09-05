import React from 'react';
import PropTypes from 'prop-types';
import MessageInput from './MessageInput';
import Messages from './Messages';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
}));

const Chat = ({ messagesData, onSubmitMessage, onUpdateMessageInput, messageInput }) => {
  const classes = useStyles();

  return (
    <section style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
      <div className={classes.toolbar} />
      <Messages messagesData={messagesData} />
      <MessageInput 
        onSubmitMessage={onSubmitMessage} 
        onUpdateMessageInput={onUpdateMessageInput} 
        messageInput={messageInput}
      />
    </section>
  );
};

Chat.propTypes = {
  messagesData: PropTypes.array.isRequired,
  onSubmitMessage: PropTypes.func.isRequired,
  onUpdateMessageInput: PropTypes.func.isRequired,
  messageInput: PropTypes.string.isRequired
};

export default Chat;
