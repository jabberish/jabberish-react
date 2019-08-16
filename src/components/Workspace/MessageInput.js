import React from 'react';
import PropTypes from 'prop-types';

const MessageInput = ({ onSubmitMessage, onUpdateMessageInput, messageInput }) => {

  return (
    <form onSubmit={onSubmitMessage}>
      <input onChange={onUpdateMessageInput} value={messageInput} autoComplete="off" />
      <button>Send</button>
    </form>
  );
};

MessageInput.propTypes = {
  onSubmitMessage: PropTypes.func.isRequired,
  onUpdateMessageInput: PropTypes.func.isRequired,
  messageInput: PropTypes.string.isRequired
};

export default MessageInput;
