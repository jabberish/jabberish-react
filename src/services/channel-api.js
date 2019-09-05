const fetchWorkspaceChannels = (workspace) => {
  return fetch(`https://jabberish-api.herokuapp.com/api/v1/channels/${workspace}`, {
    method: 'get',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include'
  })
    .then(res => res.json());
};

export {
  fetchWorkspaceChannels,
};
