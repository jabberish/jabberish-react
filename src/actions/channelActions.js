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

export const SELECT_CHANNEL = 'SELECT_CHANNEL';
export const selectChannel = id => ({
  type: SELECT_CHANNEL,
  payload: id
});
