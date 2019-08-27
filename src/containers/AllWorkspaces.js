import { connect } from 'react-redux';
import WorkspaceList from '../components/Home/WorkspaceList';
import { getWorkspaces } from '../selectors/workspaceSelectors';
import { setCurrentWorkspace } from '../actions/workspaceActions';

const mapStateToProps = (state) => ({
  workspaces: getWorkspaces(state)
});

const mapDispatchToProps = dispatch => ({
  setCurrentWorkspace: (id) => dispatch(setCurrentWorkspace(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkspaceList);
