import type { student } from "../types/createFormsTypes";
import api from "./api";

export const createUser = async (userData: student) => {
  try {
    const response = await api.post('/user', userData); 
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};