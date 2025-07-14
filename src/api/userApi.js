import axiosClient from './axiosClient';

const userApi = {
  register(data) {
    const url = '/api/auth/local/register';
    // return axiosClient.post(url, data);
    return axiosClient.post(url, {
      email: data.email,
      password: data.password,
      username: data.username,
    });
  },

  login(data) {
    const url = '/api/auth/local';
    // return axiosClient.post(url, data);
    return axiosClient.post(url, {
      identifier: data.identifier,
      password: data.password,
    });
  },
};

export default userApi;
