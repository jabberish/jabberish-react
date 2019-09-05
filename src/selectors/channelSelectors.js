export const getChannelsState = state => state.channels;
export const getChannels = state => getChannelsState(state).list;
export const getCurrentChannel = state => getChannelsState(state).currentChannel;
export const getMessages = state => getChannelsState(state).messages;
