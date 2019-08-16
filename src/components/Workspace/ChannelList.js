import React from 'react';
import PropTypes from 'prop-types';
import ChannelItem from './ChannelItem';

import styles from './ChannelList.css';

const ChannelList = ({ channels, selectChannel }) => {

  const channelItems = channels.map(channel => {
    return (
      <ChannelItem 
        key={`${channel._id}-${channel.name}`} 
        channel={channel} 
        selectChannel={selectChannel}
      />
    );
  });
  
  return (
    <ul className={styles.ChannelList}>
      Channel List
      {channelItems}
    </ul>
  );
};

ChannelList.propTypes = {
  channels: PropTypes.array.isRequired,
  selectChannel: PropTypes.func.isRequired
};

export default ChannelList;
