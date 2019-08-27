import { fetchMemberWorkspaces } from '../services/workspace-api';

export const GET_MEMBER_WORKSPACES_LOADING = 'GET_MEMBER_WORKSPACES_LOADING';
export const GET_MEMBER_WORKSPACES = 'GET_MEMBER_WORKSPACES';
export const GET_MEMBER_WORKSPACES_ERROR = 'GET_MEMBER_WORKSPACES_ERROR';
export const getMemberWorkspaces = () => dispatch => {
  dispatch({
    type: GET_MEMBER_WORKSPACES_LOADING
  });

  return fetchMemberWorkspaces()
    .then(workspaces => {
      dispatch({
        type: GET_MEMBER_WORKSPACES,
        payload: workspaces
      });
    })
    .catch(err => {
      dispatch({
        type: GET_MEMBER_WORKSPACES_ERROR,
        payload: err
      });
    });
};

export const SET_CURRENT_WORKSPACE = 'SET_CURRENT_WORKSPACE';
export const setCurrentWorkspace = id => ({
  type: SET_CURRENT_WORKSPACE,
  payload: id
});
