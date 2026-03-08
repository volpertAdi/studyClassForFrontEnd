import type { Classroom } from "../types/createFormsTypes";
import api from "./api";

export const createClassroom = async (classData: Classroom) => {
  try {
    const response = await api.post('/classroom', classData);
    return response.data;
  } catch (error) {
    console.error('Error creating classroom:', error);
    throw error;
  }
};