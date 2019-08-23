import React from 'react';
import PropTypes from 'prop-types';
import WorkspaceList from '../components/Home/WorkspaceList';
import WorkspaceDialog from '../components/Home/WorkspaceDialog';
import { fetchMemberWorkspaces, fetchCreateWorkspace } from '../services/workspace-api';

class Home extends React.Component {
  static propTypes = {
    updateWorkspace: PropTypes.func.isRequired
  };
  
  state = {
    workspaces: [],
    dialogOpen: false,
    newWorkspaceName: ''
  }

  componentDidMount() {
    fetchMemberWorkspaces()
      .then(res => {
        if(res.length) {
          this.setState({ workspaces: res });
        }
      });
  }

  handleUpdate = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleOpenDialog = () => {
    this.setState({ dialogOpen: true });
  }

  handleCloseDialog = () => {
    this.setState({ dialogOpen: false });
  }

  handleCreateWorkspace = () => {
    this.handleCloseDialog();
    const { newWorkspaceName } = this.state;
    fetchCreateWorkspace(newWorkspaceName)
      .then(() => {
        return fetchMemberWorkspaces();
      })
      .then(res => {
        if(res.length) {
          this.setState({ workspaces: res });
        }
      });
  }
  
  render() {
    const { workspaces, dialogOpen } = this.state;
    const { updateWorkspace } = this.props;

    return (
      <>
        <h2>Home</h2>
        <WorkspaceList 
          workspaces={workspaces} 
          updateWorkspace={updateWorkspace} 
          handleOpenDialog={this.handleOpenDialog} 
        />
        <WorkspaceDialog 
          open={dialogOpen} 
          handleCloseDialog={this.handleCloseDialog} 
          handleCreateWorkspace={this.handleCreateWorkspace}
          handleUpdate={this.handleUpdate}
        />
      </>
    );
  }
}

export default Home;
