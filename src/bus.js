import axios from 'axios';

const API_BASE_URL = 'https://buslive-database-api.onrender.com/api'; 

export const getItems = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/buses`);
    console.log("Passei aqui");
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const addBus = async (rota) => {
  try {
    console.log('rota'+ rota)
    const response = await axios.post(`${API_BASE_URL}/buses`, {
      rota
    });
    return response.data;
  } catch (error) {
    console.error('Error adding bus:', error);
    throw error;
  }
};

export const removeBus = async (id) => {
  try {
    console.log(id)
    const response = await axios.delete(`${API_BASE_URL}/buses/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error removing bus:', error.response.data);
    throw error;
  }
};