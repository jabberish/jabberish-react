import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ChannelList from '../components/Workspace/ChannelList';
// import Chat from '../components/Workspace/Chat';
import { getChannels } from '../selectors/channelSelectors';
import {  } from '../actions/channelActions';
import { connect } from 'react-redux';
import { getChannels as fetch, selectChannel } from '../actions/channelActions';
import { getCurrentWorkspace } from '../selectors/workspaceSelectors';

const Workspace = ({ currentWorkspace, channels, fetch }) => {

  useEffect(() => {
    fetch(currentWorkspace);
  }, []);
  
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
  currentWorkspace: PropTypes.string.isRequired,
  channels: PropTypes.array.isRequired,
  fetch: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  channels: getChannels(state),
  currentWorkspace: getCurrentWorkspace(state)
});

const mapDispatchToProps = dispatch => ({
  fetch: (currentWorkspace) => dispatch(fetch(currentWorkspace)),
  setlectChannel: id => dispatch(selectChannel(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Workspace);

