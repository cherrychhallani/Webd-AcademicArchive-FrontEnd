export const authenticateUser = (id, password) => {
  const users = {
    'IIT2023063': { name: 'Cherry Chhallani', password: '1/11/2005', semester: '3rd', cg: '7.6', clubs: 'Drama Club' },
    'IIT2023052': { name: 'Saniya Saini', password: '7/4/2004', semester: '3rd', cg: '7.8', clubs: 'Arts Club' },
    'IIT2023121': { name: 'Love Bansal', password: '10/3/2004', semester: '3rd', cg: '7.9', clubs: 'Filming Club' },
    'Admin': { name: 'Admin', password: 'iamadmin', semester: '', cg: '', clubs: '' },
  };

  const user = users[id];
  if (user && user.password === password) {
    localStorage.setItem('currentUser', JSON.stringify({ ...user, id }));

    localStorage.setItem('users', JSON.stringify(Object.keys(users).map(userId => ({
      id: userId,
      ...users[userId]
    }))));

    return true;
  }
  return false;
};

export const getUserRole = (id) => {
  return id === 'Admin' ? 'admin' : 'student';
};
