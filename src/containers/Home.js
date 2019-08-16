import React from 'react';
import PropTypes from 'prop-types';
import WorkspaceList from '../components/Home/WorkspaceList';
import { fetchMemberWorkspaces } from '../services/workspace-api';

class Home extends React.Component {
  static propTypes = {
    updateWorkspace: PropTypes.func.isRequired
  };
  
  state = {
    workspaces: []
  }

  componentDidMount() {
    fetchMemberWorkspaces()
      .then(res => {
        if(res.length) {
          this.setState({ workspaces: res });
        }
      });
  }
  
  render() {
    const { workspaces } = this.state;
    const { updateWorkspace } = this.props;

    return (
      <>
        <h2>Home</h2>
        <WorkspaceList workspaces={workspaces} updateWorkspace={updateWorkspace} />
      </>
    );
  }
}

export default Home;
