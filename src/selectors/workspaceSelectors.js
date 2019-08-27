export const getWorkspacesState = state => state.workspaces;
export const getWorkspaces = state => getWorkspacesState(state).list;
export const getWorkspacesLoading = state => getWorkspacesState(state).loading;
export const getWorkspacesError = state => getWorkspacesState(state).error;
