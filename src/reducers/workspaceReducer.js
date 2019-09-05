import {
  GET_MEMBER_WORKSPACES_LOADING,
  GET_MEMBER_WORKSPACES,
  GET_MEMBER_WORKSPACES_ERROR,
  SET_CURRENT_WORKSPACE } from '../actions/workspaceActions';

const initialState = {
  loading: false,
  list: [],
  error: null,
  currentWorkspace: ''
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case GET_MEMBER_WORKSPACES_LOADING:
      return { ...state, loading: true };
    case GET_MEMBER_WORKSPACES:
      return { ...state, error: null, loading: false, list: action.payload };
    case GET_MEMBER_WORKSPACES_ERROR:
      return { ...state, loading: false, error: action.payload };
    case SET_CURRENT_WORKSPACE:
      return { ...state, currentWorkspace: action.payload };
    default:
      return state;
  }
}
