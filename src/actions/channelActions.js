import { fetchWorkspaceChannels } from '../services/channel-api';

export const GET_CHANNELS_LOADING = 'GET_CHANNELS_LOADING';
export const GET_CHANNELS = 'GET_CHANNELS';
export const GET_CHANNELS_ERROR = 'GET_CHANNELS_ERROR';
export const getChannels = (id) => dispatch => {
  dispatch({
    type: GET_CHANNELS_LOADING
  });

  return fetchWorkspaceChannels(id)
    .then(channels => {
      dispatch({
        type: GET_CHANNELS,
        payload: channels
      });
    })
    .catch(err => {
      dispatch({
        type: GET_CHANNELS_ERROR,
        payload: err
      });
    });
};

export const CLEAR_CHANNELS = 'CLEAR_CHANNELS';
export const clearChannels = () => ({
  type: CLEAR_CHANNELS
});

export const SELECT_CHANNEL = 'SELECT_CHANNEL';
export const selectChannel = id => ({
  type: SELECT_CHANNEL,
  payload: id
});

export const LOAD_HISTORY = 'LOAD_HISTORY';
export const loadHistory = history => ({
  type: LOAD_HISTORY,
  payload: history
});

export const CLEAR_HISTORY = 'CLEAR_HISTORY';
export const clearHistory = () => ({
  type: CLEAR_HISTORY
});

export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const recieveMessage = message => ({
  type: RECEIVE_MESSAGE,
  payload: message
});
