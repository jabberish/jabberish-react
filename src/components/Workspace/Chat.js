import React from 'react';
import PropTypes from 'prop-types';
import MessageInput from './MessageInput';
import Messages from './Messages';

const Chat = ({ messagesData, onSubmitMessage, onUpdateMessageInput, messageInput }) => {
  return (
    <section style={{ width: '100%' }}>
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
