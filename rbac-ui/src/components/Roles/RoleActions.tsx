import axios from "axios";

const API_URL = "http://localhost:5000/roles";

export const getRoles = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addRole = async (role: any) => {
  const response = await axios.post(API_URL, role);
  return response.data;
};

export const updateRole = async (id: number, role: any) => {
  const response = await axios.put(`${API_URL}/${id}`, role);
  return response.data;
};

export const deleteRole = async (id: number) => {
  await axios.delete(`${API_URL}/${id}`);
};
