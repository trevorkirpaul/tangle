// mock info for auth.test.js

const users = [
  { email: 'admin', password: 'pass', userInfo: 'Bob', token: 'tokenBob' },
  {
    email: 'trevor',
    password: 'word',
    userInfo: 'Trevor',
    token: 'tokenTrevor',
  },
];

export default fields =>
  new Promise((resolve, reject) => {
    const queryEmail = fields.email;
    const queryPassword = fields.password;

    const user = users.find(user => user.email === queryEmail);

    if (user.password === queryPassword) {
      return resolve({ data: { token: user.token, userInfo: user.userInfo } });
    } else {
      return reject();
    }
  });
