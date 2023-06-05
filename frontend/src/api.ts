import axios from 'axios';

const API_BASE_URL = "http://localhost:3000"//process.env.API_URL || 'https://localhost:3000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
  },
});

export async function fetchQRCodes() {
  const response = await api.get('/qr-codes');
  return response.data;
}

export async function createQRCode(location: string, stories: string[]) {
  const response = await api.post('/qr-codes', { location, stories });
  return response.data;
}
