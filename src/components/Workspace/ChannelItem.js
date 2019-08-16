import React from 'react';
import PropTypes from 'prop-types';

const ChannelItem = ({ channel, selectChannel }) => {
  return (
    <li onClick={() => selectChannel(channel)}>{channel.name}</li>
  );
};

ChannelItem.propTypes = {
  channel: PropTypes.object.isRequired,
  selectChannel: PropTypes.func.isRequired
};

export default ChannelItem;
