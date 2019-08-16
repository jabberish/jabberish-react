import React from 'react';
import PropTypes from 'prop-types';

import ChannelList from './ChannelList';
import Chat from './Chat';

import { fetchWorkspaceChannels } from '../../services/channel-api';

// eslint-disable-next-line no-undef
const socket = io('http://localhost:3000');

class Workspace extends React.Component {
  state = {
    channels: [],
    currentChannel: '',
    currentWorkspace: '',
    messagesData: []
  }

  componentDidMount() {
    const { currentWorkspace } = this.props;
    this.setState({ currentWorkspace });
    fetchWorkspaceChannels(currentWorkspace)
      .then(channels => {
        if(channels.length) {
          this.setState({ channels: channels });
        }
      });
  }

  selectChannel = channel => {
    socket.removeListener('history');
    this.setState({ currentChannel: channel._id });
    socket.emit('leave', channel._id);
    socket.emit('join', { 
      channel: channel._id, 
      workspace: this.state.currentWorkspace, 
      user: this.props.userId
    });
    socket.on('history', (msgs) => {
      this.setState({ messagesData: msgs });
    });
  }

  render() {
    const { channels, messagesData } = this.state;
    return (
      <>
        <h2>Workspace</h2>
        <ChannelList channels={channels} selectChannel={this.selectChannel} />
        <Chat messagesData={messagesData} />
      </>
    );
  }
  
}

Workspace.propTypes = {
  currentWorkspace: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired
};

export default Workspace;
