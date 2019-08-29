import React from 'react';
import PropTypes from 'prop-types';
import ChannelList from '../components/Workspace/ChannelList';
// import Chat from '../components/Workspace/Chat';
import { getChannels } from '../selectors/channelSelectors';
import {  } from '../actions/channelActions';
import { connect } from 'react-redux';
import { getChannels as fetch, selectChannel } from '../actions/channelActions';
import { getCurrentWorkspace } from '../selectors/workspaceSelectors';

// eslint-disable-next-line no-undef
// const socket = io('http://localhost:3000');

class Workspace extends React.Component {
  static propTypes = {
    currentWorkspace: PropTypes.string.isRequired,
    selectChannel: PropTypes.func.isRequired,
    channels: PropTypes.array.isRequired,
    fetch: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetch(this.props.currentWorkspace);
  }

  handleSelectChannel = (id) => {
    // console.log('selecting', id);
    this.props.selectChannel(id);
  }
  
  render() {
    return (
      <section>
        <ChannelList channels={this.props.channels} selectChannel={this.handleSelectChannel} />
        {/* <Chat 
          messagesData={messagesData} 
          onSubmitMessage={this.onSubmitMessage} 
          onUpdateMessageInput={this.onUpdateMessageInput}
          messageInput={messageInput} 
        /> */}
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  channels: getChannels(state),
  currentWorkspace: getCurrentWorkspace(state)
});

const mapDispatchToProps = dispatch => ({
  fetch: (currentWorkspace) => dispatch(fetch(currentWorkspace)),
  selectChannel: id => dispatch(selectChannel(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Workspace);

