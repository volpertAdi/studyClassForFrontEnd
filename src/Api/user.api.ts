import { idID } from "@mui/material/locale";
import type { student } from "../types/createFormsTypes";
import api from "./api";

export const createUser = async (userData: student) => {
  try {
    const payload: student = {
      ...userData,
      age: Number(userData.age)
    };
    
    const response = await api.post('/user', payload); 
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

export const getAllStudents = async (): Promise<student[]> => {
  try {
    const response = await api.get('/user');
    return response.data;
  } catch (error) {
    console.error('Error fetching students:', error);
    throw error;
  }
};

export const deleteStudent = async (id: string) => {
  try {
    await api.delete(`/user/${id}`);
  } catch (error) {
    console.error('Error deleting student:', error);
    throw error;
  }
};

export const updateStudentClass = async (studentId: string, classId: string) => {
  try {
    const response = await api.patch(`/user/${studentId}/update-class`, {
      classroomId: classId 
    });
    return response.data;
  } catch (error) {
    console.error('Error updating class:', error);
    throw error;
  }
};