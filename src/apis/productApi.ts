import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fakestoreapi.com',
});

export const getProducts = async () => {
  const response = await api.get('/products');
  return response.data;
}

export const getProductById = async (id: number) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
}
