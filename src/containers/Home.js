import React from 'react';
import PropTypes from 'prop-types';
import WorkspaceList from '../components/Home/WorkspaceList';
import WorkspaceDialog from '../components/Home/WorkspaceDialog';
import { fetchMemberWorkspaces, fetchCreateWorkspace } from '../services/workspace-api';
import { Typography } from '@material-ui/core';

import { getWorkspaces, getWorkspacesLoading, getWorkspacesError } from '../selectors/workspaceSelectors';
import { getMemberWorkspaces } from '../actions/workspaceActions';
import { connect } from 'react-redux';

class Home extends React.Component {
  static propTypes = {
    updateWorkspace: PropTypes.func.isRequired,
    fetch: PropTypes.func.isRequired,
    characters: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.object
  };
  
  state = {
    workspaces: [],
    createDialogOpen: false,
    newWorkspaceName: '',
    deleteDialogOpen: false
  }

  componentDidMount() {
    this.props.fetch();
    // fetchMemberWorkspaces()
    //   .then(res => {
    //     if(res.length) {
    //       this.setState({ workspaces: res });
    //     }
    //   });
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

const mapStateToProps = state => ({
  characters: getWorkspaces(state),
  loading: getWorkspacesLoading(state),
  error: getWorkspacesError(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(getMemberWorkspaces());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
