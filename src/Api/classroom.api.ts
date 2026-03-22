import type { Classroom } from "../types/createFormsTypes";
import axiosInstance from "./api";

export const createClassroom = async (classData: Classroom) => {
  try {
    const payload: Classroom = {
      ...classData,
      maxSeats: Number(classData.maxSeats)
    };
    payload.seatsLeft = payload.maxSeats;
      
    const response = await axiosInstance.post('/classroom', payload);
    return response.data;
  } catch (error) {
    console.error('Error creating classroom:', error);
    throw error;
  }
};

export const getAllClassrooms = async () => {
  try {
    const response = await axiosInstance.get('/classroom');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteClassroom = async (id: string) => {
  try {
    await axiosInstance.delete(`/classroom/${id}`);
  } catch (error) {
    console.error('Error deleting classroom:', error);
    throw error;
  }
};

export const getAllClassroomsAvailable = async () => {
  try {
    const response = await axiosInstance.get('/classroom/Available');
    return response.data;
  } catch (error) {
    throw error;
  }
};