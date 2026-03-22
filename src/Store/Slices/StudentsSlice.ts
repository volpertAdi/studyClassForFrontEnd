import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { student } from '../../types/createFormsTypes';

interface StudentState {
  students: student[];
}

const initialState: StudentState = {
  students: [],
};

const studentSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    setStudents: (state, action: PayloadAction<student[]>) => {
      state.students = action.payload;
    },

    addStudent: (state, action: PayloadAction<student>) => {
      state.students.push(action.payload);
    },

    updateClassRoomStudent: (state, action: PayloadAction<{studentId: string, classroomId:string | null}>) => {
      const index = state.students.findIndex(s => s.id === action.payload.studentId);
      
      if (index !== -1) {
        state.students[index].classroomId = action.payload.classroomId; 
      }
    },

    deleteStudentStore: (state, action: PayloadAction<string>) => {
      state.students = state.students.filter(s => s.id !== action.payload);
    },
  },
  selectors: {
    selectAllStudents: (state) => state.students,
    selectStudentById: (state, id: string) => state.students.find(s => s.id === id),
  }
});

export const { 
  setStudents, addStudent, updateClassRoomStudent, deleteStudentStore 
} = studentSlice.actions;
export const { selectAllStudents } = studentSlice.selectors;

export default studentSlice.reducer;