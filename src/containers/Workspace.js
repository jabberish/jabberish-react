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
    messagesData: [],
    messageInput: '',
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
    socket.removeListener('history', 'chat message');
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
    socket.on('chat message', (msg) => {
      this.setState(state => ({ messagesData: [...state.messagesData, msg] }));
    });
  }

  onSubmitMessage = e => {
    e.preventDefault();
    const { currentChannel, currentWorkspace, messageInput } = this.state;
    socket.emit('chat message', { 
      channel: currentChannel, 
      message: messageInput, 
      user: this.props.userId, 
      workspace: currentWorkspace
    });
  };

  onUpdateMessageInput = e => {
    this.setState({ messageInput: e.target.value });
  }

  render() {
    const { channels, messagesData } = this.state;
    return (
      <section className={styles.Workspace}>
        <ChannelList channels={channels} selectChannel={this.selectChannel} />
        <Chat 
          messagesData={messagesData} 
          onSubmitMessage={this.onSubmitMessage} 
          onUpdateMessageInput={this.onUpdateMessageInput} 
        />
      </section>
    );
  }
  
}

export default Workspace;
