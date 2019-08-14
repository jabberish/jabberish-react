const fetchMemberWorkspaces = () => {
  return fetch('http://localhost:3000/api/v1/workspaces/member', {
    method: 'get',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include'
  })
    .then(res => res.json());
};

export {
  fetchMemberWorkspaces
};
