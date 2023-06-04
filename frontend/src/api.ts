import axios from 'axios';

const API_BASE_URL = process.env.API_URL || 'http://localhost:3000';

export async function fetchQRCodes() {
  const response = await axios.get(`${API_BASE_URL}/qr-codes`);
  return response.data;
}

export async function createQRCode(location: string, stories: string[]) {
  const response = await axios.post(`${API_BASE_URL}/qr-codes`, { location, stories });
  return response.data;
}
