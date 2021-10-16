// export function signIn(data) {
//   console.log(data);
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve({
//         token: 'jdiijdsiad',
//         user: {
//           name: 'lucas',
//           email: 'lucas@gmail.com',
//         },
//       });
//     }, 2000);
//   });
// }

import axios from 'axios';
import {saveData, getData, removeValue} from '../helpers/Storage';

const baseUrl = process.env.REACT_APP_API_URL;

export const isAuthenticated = () => getData('TOKEN_KEY') !== null;

export const signIn = async credencias => {
  try {
    const url = 'https://reqres.in/api/login';
    const body = credencias;

    const res = await axios.post(url, body);

    // saveData('TOKEN_KEY', res.data?.token);
    // saveData('USER_KEY', res.data?.user);

    return res.data;
  } catch (e) {
    if (e.response && e.response.status === 401) {
      return {error: e.response.data};
    }
    return {error: 'Ocorreu algum erro. '};
  }
};

export const logout = () => {
  removeValue('USER_KEY');
  removeValue('TOKEN_KEY');
  // history.replace('/');
};
