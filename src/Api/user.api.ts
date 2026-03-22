import type { student } from "../types/createFormsTypes";
import axiosInstance from "./api";

export const createUser = async (userData: student) => {
  try {
    const payload: student = {
      ...userData,
      age: Number(userData.age)
    };
    
    const response = await axiosInstance.post('/user', payload); 
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

export const getAllStudents = async (): Promise<student[]> => {
  try {
    const response = await axiosInstance.get('/user');
    return response.data;
  } catch (error) {
    console.error('Error fetching students:', error);
    throw error;
  }
};

export const deleteStudent = async (id: string) => {
  try {
    await axiosInstance.delete(`/user/${id}`);
  } catch (error) {
    console.error('Error deleting student:', error);
    throw error;
  }
};

export const assigntudentClass = async (studentId: string, classId: string | null) => {
  try {
    const response = await axiosInstance.patch(`/user/${studentId}/assign-class`, {
      classroomId: classId 
    });
    return response.data;
  } catch (error) {
    console.error('Error updating class:', error);
    throw error;
  }
};