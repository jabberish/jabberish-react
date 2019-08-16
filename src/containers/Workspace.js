import React from 'react';
import PropTypes from 'prop-types';

import ChannelList from '../components/Workspace/ChannelList';
import Chat from '../components/Workspace/Chat';

import styles from './Workspace.css';

import { fetchWorkspaceChannels } from '../services/channel-api';

// eslint-disable-next-line no-undef
const socket = io('http://localhost:3000');

class Workspace extends React.Component {
  static propTypes = {
    currentWorkspace: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired
  };
  
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
    socket.emit('leave', this.state.currentChannel);
    this.setState({ currentChannel: channel._id });
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
        <section className={styles.Workspace}>
          <ChannelList channels={channels} selectChannel={this.selectChannel} />
          <Chat messagesData={messagesData} />
        </section>
      </>
    );
  }
  
}

export default Workspace;
