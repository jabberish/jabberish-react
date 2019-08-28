import React from 'react';
import PropTypes from 'prop-types';
import ChannelList from '../components/Workspace/ChannelList';
import Chat from '../components/Workspace/Chat';
import { getChannels } from '../selectors/channelSelectors';
import { connect } from 'react-redux';

const Workspace = ({ channels }) => {
  console.log('CHANNELSSSS', channels);
  return (
    <section>
      <ChannelList channels={channels} selectChannel={selectChannel} />
      <Chat 
        messagesData={messagesData} 
        onSubmitMessage={this.onSubmitMessage} 
        onUpdateMessageInput={this.onUpdateMessageInput}
        messageInput={messageInput} 
      />
    </section>
  );
};

Workspace.propTypes = {
  channels: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  channels: getChannels(state)
});

export default connect(
  mapStateToProps
)(Workspace);

