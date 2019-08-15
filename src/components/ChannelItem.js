import React from 'react';
import PropTypes from 'prop-types';

const ChannelItem = ({ channel }) => {
  return (
    <li>{channel.name}</li>
  );
};

ChannelItem.propTypes = {
  channel: PropTypes.object.isRequired
};

export default ChannelItem;
