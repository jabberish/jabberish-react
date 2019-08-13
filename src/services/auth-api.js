const submitLogin = (user) => {
  return fetch('http://localhost:3000/api/v1/auth/signin', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({
      username: user.username,
      password: user.password
    })
  })
    .then(res => res.json());
};

const fetchRegister = (user) => {
  return fetch('http://localhost:3000/api/v1/auth/signup', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({
      username: user.username,
      password: user.password
    })
  })
    .then(res => res.json());
};

const submitVerify = () => {
  return fetch('http://localhost:3000/api/v1/auth/verify', {
    mode: 'cors',
    method: 'get',
    headers: { 'Content-Type': 'application/json' },
  })
    .then(res => res.json());
};

export {
  submitLogin,
  fetchRegister,
  submitVerify
};
