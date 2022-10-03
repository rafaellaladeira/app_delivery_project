import axios from 'axios';

export const api = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || '3001'}`,
});

export const request = async (endpoint, body, token) => {
  const { data } = await api.post(endpoint, body, { headers: { Authorization: token } });
  return data;
};

export const requestRegisterUser = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export const getInfo = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
};

export const getAllProducts = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
};

export const update = async (endpoint, body) => {
  const { data } = await api.put(endpoint, body);
  return data;
};

export default api;
