const fetchLogin = (user) => {
  return fetch('http://localhost:3000/api/v1/auth/signin', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({
      username: user.username,
      password: user.password
    })
  })
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Incorrect username or password';

      return json;
    });
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

const fetchVerify = () => {
  return fetch('http://localhost:3000/api/v1/auth/verify', {
    mode: 'cors',
    method: 'get',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include'
  })
    .then(res => res.json());
};

export {
  fetchLogin,
  fetchRegister,
  fetchVerify
};
