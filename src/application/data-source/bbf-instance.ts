import axios from 'axios';

export const bffInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BFF_URL,
  headers: {
    'x-api-key': process.env.NEXT_PUBLIC_API_KEY_BFF,
  },
});
