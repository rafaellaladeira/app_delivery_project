import { api } from './request';

export const getOrders = async () => {
  const request = await api.get('/orders', {
    headers: {
      authorization: JSON.parse(localStorage.getItem('user')).token,
    },
  });
  return request.data;
};

export const getOrder = async (order) => {
  const request = await api.get(`/orders/${order}`);
  return request.data;
};
