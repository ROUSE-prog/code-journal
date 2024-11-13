import axios from 'axios';

export const login = async (username, password) => {
  try {
    const response = await axios.post('http://localhost:5001/api/auth/login', {
      username,
      password,
    });
    const { token } = response.data;
    localStorage.setItem('token', token); // Store token in local storage
    return token;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};

export const getToken = () => {
  return localStorage.getItem('token');
};

export const logout = () => {
  localStorage.removeItem('token');
};
