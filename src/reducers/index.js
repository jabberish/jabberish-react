import { combineReducers } from 'redux';
import workspaces from './workspaceReducer';
import channels from './channelReducer';

export default combineReducers({
  workspaces,
  channels
});
