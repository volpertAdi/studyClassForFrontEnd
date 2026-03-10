import type { Classroom } from "../types/createFormsTypes";
import api from "./api";

export const createClassroom = async (classData: Classroom) => {
  try {
    const payload: Classroom = {
      ...classData,
      maxSeats: Number(classData.maxSeats)
    };
    payload.seatsLeft = payload.maxSeats;
      
    const response = await api.post('/classroom', payload);
    return response.data;
  } catch (error) {
    console.error('Error creating classroom:', error);
    throw error;
  }
};

export const getAllClassrooms = async () => {
  try {
    const response = await api.get('/classroom');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteClassroom = async (id: string) => {
  try {
    await api.delete(`/classroom/${id}`);
  } catch (error) {
    console.error('Error deleting classroom:', error);
    throw error;
  }
};