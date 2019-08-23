import React from 'react';
import PropTypes from 'prop-types';
import WorkspaceList from '../components/Home/WorkspaceList';
import WorkspaceDialog from '../components/Home/WorkspaceDialog';
import { fetchMemberWorkspaces, fetchCreateWorkspace } from '../services/workspace-api';
import { Typography } from '@material-ui/core';

class Home extends React.Component {
  static propTypes = {
    updateWorkspace: PropTypes.func.isRequired
  };
  
  state = {
    workspaces: [],
    createDialogOpen: false,
    newWorkspaceName: '',
    deleteDialogOpen: false
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
    this.setState({ createDialogOpen: true });
  }

  handleCloseDialog = () => {
    this.setState({ createDialogOpen: false });
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
    const { workspaces, createDialogOpen } = this.state;
    const { updateWorkspace } = this.props;

    return (
      <>
      <Typography variant="h4">Workspaces</Typography>
        <WorkspaceList 
          workspaces={workspaces} 
          updateWorkspace={updateWorkspace} 
          handleOpenDialog={this.handleOpenDialog} 
        />
        <WorkspaceDialog 
          open={createDialogOpen} 
          handleCloseDialog={this.handleCloseDialog} 
          handleCreateWorkspace={this.handleCreateWorkspace}
          handleUpdate={this.handleUpdate}
        />
      </>
    );
  }
}

export default Home;
