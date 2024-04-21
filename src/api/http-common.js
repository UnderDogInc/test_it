import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: '43507282-d72aeeec87f2e51592d981b09',
    q: 'cats',
    per_page: 20,
  },
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
