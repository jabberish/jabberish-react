import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, Typography } from '@material-ui/core';

const Message = ({ messageData }) => {
  return (
    <ListItem>
      <Typography type="body1">
        {messageData.user.username + ': ' + messageData.text}
      </Typography>
    </ListItem>
  );
};

Message.propTypes = {
  messageData: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired
  }).isRequired
};

export default Message;
