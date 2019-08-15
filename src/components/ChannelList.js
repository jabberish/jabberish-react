import React from 'react';
import PropTypes from 'prop-types';
import ChannelItem from './ChannelItem';

const ChannelList = ({ channels }) => {

  const channelItems = channels.map(channel => {
    return <ChannelItem key={`${channel._id}-${channel.name}`} channel={channel} />;
  });
  return (
    <ul>
      Channel List
      {channelItems}
    </ul>
  );
};

ChannelList.propTypes = {
  channels: PropTypes.array.isRequired
};

export default ChannelList;
