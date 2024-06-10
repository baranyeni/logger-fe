import axios from 'axios';

const api = axios.create({
  baseURL: 'https://log-api-82859d3a66e9.herokuapp.com/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchData = async (endpoint) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('API fetch error:', error);
    throw error;
  }
};
