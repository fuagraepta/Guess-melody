import axios from 'axios';
import {UserActionCreator} from './reducer/user/user-action-creator.js';

const Error = {
  UNAUTHORIZED: 401
};

const createAPI = (dispatch) => {
  const api = axios.create({
    baseURL: `https://es31-server.appspot.com/guess-melody`,
    timeout: 1000 * 5,
    withCredentials: true
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    if (err.response.status === Error.UNAUTHORIZED) {
      dispatch(UserActionCreator.requireAuthorization(true));
    }

    return err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default createAPI;
