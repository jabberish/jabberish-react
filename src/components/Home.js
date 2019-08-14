import React from 'react';
import WorkspaceList from './WorkspaceList';
import { fetchMemberWorkspaces } from '../services/workspace-api';

class Home extends React.Component {
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

    return (
      <>
        <h2>Home</h2>
        <WorkspaceList workspaces={workspaces}/>
      </>
    );
  }
  
}

export default Home;
