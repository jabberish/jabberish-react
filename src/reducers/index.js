import { combineReducers } from 'redux';
import workspaces from './workspaceReducer';
import channels from './channelReducer';
import user from './userReducer';

export default combineReducers({
  workspaces,
  channels,
  user
});
