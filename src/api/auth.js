import axios from "axios";

const API_URL = "http://localhost:8000/api/";

export const login = async (username, password) => {
  return await axios.post(`${API_URL}login/`, { username, password });
};

export const register = async (username, password, role) => {
  return await axios.post(`${API_URL}register/`, { username, password, role });
};
