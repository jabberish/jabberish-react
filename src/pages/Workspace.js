import React from 'react';
import PropTypes from 'prop-types';
import ChannelList from '../components/Workspace/ChannelList';
// import Chat from '../components/Workspace/Chat';
import { getChannels } from '../selectors/channelSelectors';
import { connect } from 'react-redux';
import { selectChannel } from '../actions/channelActions';

const Workspace = ({ channels }) => {
  return (
    <section>
      <ChannelList channels={channels} selectChannel={selectChannel} />
      {/* <Chat 
        messagesData={messagesData} 
        onSubmitMessage={this.onSubmitMessage} 
        onUpdateMessageInput={this.onUpdateMessageInput}
        messageInput={messageInput} 
      /> */}
    </section>
  );
};

Workspace.propTypes = {
  channels: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  channels: getChannels(state)
});

const mapDispatchToProps = dispatch => ({
  setlectChannel: id => dispatch(selectChannel(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Workspace);

