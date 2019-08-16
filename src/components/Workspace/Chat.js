import React from 'react';
import PropTypes from 'prop-types';
import MessageInput from './MessageInput';

const Chat = ({ messagesData, onSubmitMessage, onUpdateMessageInput, messageInput }) => {
  const messages = messagesData.map(message => (
    <li key={message._id}>{message.text}</li>
  ));

  return (
    <section>
      <ul>{messages}</ul>
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
  messageInput: PropTypes.func.isRequired
};

export default Chat;
