import axios from 'axios';
import Cookies from 'universal-cookie';
import { AUTHCOOKIES } from '../infra/cookies';

export const bffInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BFF_URL,
  headers: {
    'x-api-key': process.env.NEXT_PUBLIC_API_KEY_BFF,
  },
});

bffInstance.interceptors.request.use(
  (config) => {
    const cookies = new Cookies();
    const accessToken = cookies.get(AUTHCOOKIES.ACCESS_TOKEN);

    if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;

    return config;
  },
  (err) => {
    throw new Error(err);
  },
);
