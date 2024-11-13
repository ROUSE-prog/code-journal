import axios from 'axios';
import { getToken } from '../../auth/auth';

const API_URL = 'http://localhost:5001/api';

export const logEntry = async (documentation, summary) => {
  const token = getToken();
  const response = await axios.post(
    `${API_URL}/entries/log`,
    { documentation, summary },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return response.data;
};

export const getSummaries = async () => {
  const token = getToken();
  const response = await axios.get(`${API_URL}/entries/summary`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
