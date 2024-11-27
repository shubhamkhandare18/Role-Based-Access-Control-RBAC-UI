import axios from "axios";

const API_URL = "http://localhost:5000/permissions";

export const getPermissions = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addPermission = async (permission: any) => {
  const response = await axios.post(API_URL, permission);
  return response.data;
};

export const updatePermission = async (id: number, permission: any) => {
  const response = await axios.put(`${API_URL}/${id}`, permission);
  return response.data;
};

export const deletePermission = async (id: number) => {
  await axios.delete(`${API_URL}/${id}`);
};
