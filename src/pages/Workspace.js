import React from 'react';
import PropTypes from 'prop-types';
import io from 'socket.io-client';
import ChannelList from '../components/Workspace/ChannelList';
import Chat from '../components/Workspace/Chat';
import { getChannels, getCurrentChannel, getMessages } from '../selectors/channelSelectors';
import { loadHistory, clearHistory, recieveMessage, clearChannels } from '../actions/channelActions';
import { connect } from 'react-redux';
import { getChannels as fetch, selectChannel } from '../actions/channelActions';
import { getCurrentWorkspace } from '../selectors/workspaceSelectors';
import { getUserId } from '../selectors/userSelectors';

import styles from '../containers/Workspace.css';

class Workspace extends React.Component {
  static propTypes = {
    currentWorkspace: PropTypes.string.isRequired,
    currentChannel: PropTypes.string.isRequired,
    selectChannel: PropTypes.func.isRequired,
    channels: PropTypes.array.isRequired,
    fetch: PropTypes.func.isRequired,
    userId: PropTypes.string.isRequired,
    messages: PropTypes.array.isRequired,
    loadHistory: PropTypes.func.isRequired,
    clearHistory: PropTypes.func.isRequired,
    receiveMessage: PropTypes.func.isRequired,
    clearChannels: PropTypes.func.isRequired
  }

  state = {
    messageInput: ''
  }

  socket = io('http://localhost:3000')

  componentDidMount() {
    const root = document.getElementById('root');
    root.style.overflowY = 'hidden';
    root.style.overflowX = 'hidden';

    this.props.fetch(this.props.currentWorkspace);
  }

  componentWillUnmount() {
    this.socket.removeListener('history');
    this.socket.removeListener('chat message');
    this.props.clearHistory();
    this.props.clearChannels();
    const root = document.getElementById('root');
    root.style.overflowY = 'auto';
    root.style.overflowX = 'hidden';
  }

  handleUpdate = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmitMessage = e => {
    const { 
      currentChannel, 
      currentWorkspace, 
      userId
    } = this.props;
    const { messageInput } = this.state;
    e.preventDefault();
    this.socket.emit('chat message', {
      channel: currentChannel,
      message: messageInput,
      user: userId,
      workspace: currentWorkspace
    });
    this.setState({ messageInput: '' });
  }

  handleSelectChannel = (id) => {
    const { 
      currentChannel, 
      currentWorkspace, 
      userId, 
      selectChannel,
      loadHistory,
      receiveMessage
    } = this.props;

    this.socket.removeListener('history');
    this.socket.removeListener('chat message');
    this.socket.emit('leave', currentChannel);

    selectChannel(id);
    this.socket.emit('join', { 
      channel: id, 
      workspace: currentWorkspace, 
      user: userId
    });

    this.socket.on('history', (msgs) => {
      loadHistory(msgs);
    });

    this.socket.on('chat message', msg => {
      receiveMessage(msg);
    });
  }
  
  render() {
    const { messages } = this.props;
    const { messageInput } = this.state;
    return (
      <section className={styles.Workspace}>
        <ChannelList channels={this.props.channels} selectChannel={this.handleSelectChannel} />
        <Chat 
          messagesData={messages} 
          onSubmitMessage={this.handleSubmitMessage} 
          onUpdateMessageInput={this.handleUpdate}
          messageInput={messageInput}
        />
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  channels: getChannels(state),
  currentWorkspace: getCurrentWorkspace(state),
  currentChannel: getCurrentChannel(state),
  userId: getUserId(state),
  messages: getMessages(state)
});

const mapDispatchToProps = dispatch => ({
  fetch: (currentWorkspace) => dispatch(fetch(currentWorkspace)),
  selectChannel: id => dispatch(selectChannel(id)),
  loadHistory: history => dispatch(loadHistory(history)),
  clearHistory: () => dispatch(clearHistory()),
  receiveMessage: message => dispatch(recieveMessage(message)),
  clearChannels: () => dispatch(clearChannels())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Workspace);

