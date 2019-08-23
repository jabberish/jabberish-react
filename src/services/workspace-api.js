const fetchMemberWorkspaces = () => {
  return fetch('http://localhost:3000/api/v1/workspaces/member', {
    method: 'get',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include'
  })
    .then(res => res.json());
};

const fetchCreateWorkspace = (name) => {
  return fetch('http://localhost:3000/api/v1/workspaces', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({
      name
    })
  })
    .then(res => res.json());
};

export {
  fetchMemberWorkspaces,
  fetchCreateWorkspace
};
