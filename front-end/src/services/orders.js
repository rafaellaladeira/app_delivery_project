import { api } from './request';

const mockData = new Date();

export const getOrders = async () => {
  const request = await api.get('/orders');
  return request.data;
};

export const getOrder = async (order) => {
  // const request = await api.get(´/orders?id=${order}´);
  // return request.data;

  return {
    id: order,
    user_id: 1,
    seller: {
      id: 2,
      name: 'Vinícius',
    },
    products: [
      {
        quantity: 2,
        product: {
          id: 3,
          name: 'Cerveja ruim',
          price: 15.0,
          url_image: 'https://www.google.com',
        },
      },
      {
        quantity: 90,
        product: {
          id: 4,
          name: 'Coxinha boa',
          price: 3.0,
          url_image: 'https://www.google.com',
        },
      },
    ],
    total_price: 182.5,
    delivery_address: 'delivery address 2',
    delivery_number: 'delivery number 2',
    sale_date: mockData,
    status: 'preparing',
  };
};
