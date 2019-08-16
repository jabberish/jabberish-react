import React from 'react';
import PropTypes from 'prop-types';

const Chat = ({ messagesData }) => {
  const messages = messagesData.map(message => (
    <li key={message._id}>{message.text}</li>
  ));
  return (
    <section>
      <ul>{messages}</ul>
    </section>
  );
};

Chat.propTypes = {
  messagesData: PropTypes.array.isRequired
};

export default Chat;
