import { fetchMemberWorkspaces, fetchInviteUser } from '../services/workspace-api';

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

export const INVITE_USER_WORKSPACE = 'INVITE_USER_WORKSPACE';
export const INVITE_USER_WORKSPACE_LOADING = 'INVITE_USER_WORKSPACE_LOADING';
export const INVITE_USER_WORKSPACE_ERROR = 'INVITE_USER_WORKSPACE_ERROR';
export const inviteUser = (username, workspace) => dispatch => {
  dispatch({
    type: INVITE_USER_WORKSPACE_LOADING
  });

  return fetchInviteUser(username, workspace)
    .then(() => {
      dispatch({
        type: INVITE_USER_WORKSPACE,
      });
    })
    .catch(err => {
      dispatch({
        type: INVITE_USER_WORKSPACE_ERROR,
        payload: err
      });
    });
};
