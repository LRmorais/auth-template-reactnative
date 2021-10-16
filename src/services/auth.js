export function signIn(data) {
  console.log(data);
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 'jdiijdsiad',
        user: {
          name: 'lucas',
          email: 'lucas@gmail.com',
        },
      });
    }, 2000);
  });
}
