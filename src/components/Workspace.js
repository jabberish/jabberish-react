import React from 'react';
import PropTypes from 'prop-types';
import ChannelList from './ChannelList';

import { fetchWorkspaceChannels } from '../services/channel-api';

// eslint-disable-next-line no-undef
// const socket = io('http://localhost:3000');

class Workspace extends React.Component {
  state = {
    channels: [],
    currentChannel: '',
    currentWorkspace: ''
  }

  componentDidMount() {
    const { currentWorkspace } = this.props;
    this.setState({ currentWorkspace });
    fetchWorkspaceChannels(currentWorkspace)
      .then(channels => {
        console.log(channels);
        if(channels.length) {
          this.setState({ channels: channels });
        }
      });
  }

  selectChannel = channel => {
    this.setState({ currentChannel: channel._id });
  }

  render() {
    return (
      <>
        <h2>Workspace</h2>
        <ChannelList channels={this.state.channels} selectChannel={this.selectChannel} />
      </>
    );
  }
  
}

Workspace.propTypes = {
  currentWorkspace: PropTypes.string.isRequired
};

export default Workspace;
