import React from 'react';
import PropTypes from 'prop-types';

const MessageInput = ({ onSubmitMessage, onUpdateMessageInput }) => {

  return (
    <form onSubmit={onSubmitMessage}>
      <input onChange={onUpdateMessageInput} autoComplete="off" />
      <button>Send</button>
    </form>
  );
};

MessageInput.propTypes = {
  onSubmitMessage: PropTypes.func.isRequired,
  onUpdateMessageInput: PropTypes.func.isRequired
};

export default MessageInput;
