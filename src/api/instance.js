import axios from 'axios';

// 토큰
const accessToken = window.localStorage.getItem('access_token');

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: { 'Content-type': 'application/json' },
});

export const authInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Authorization: `Bearer ${accessToken}`,
    'Content-type': 'application/json',
  },
});
