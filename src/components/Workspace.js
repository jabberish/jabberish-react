import React from 'react';
import ChannelList from './ChannelList';

import hashStorage from '../utils/hash-storage.js';
import { fetchWorkspaceChannels } from '../services/channel-api';

// eslint-disable-next-line no-undef
// const socket = io('http://localhost:3000');

class Workspace extends React.Component {
  state = {
    channels: []
  }

  componentDidMount() {
    const workspaceId = hashStorage.get().workspace;
    
    fetchWorkspaceChannels(workspaceId)
      .then(channels => {
        if(channels.length) {
          this.setState({ channels: channels });
        }
      });
  }

  render() {
    return (
      <>
        <h2>Workspace</h2>
        <ChannelList channels={this.state.channels} />
      </>
    );
  }
  
}

export default Workspace;
