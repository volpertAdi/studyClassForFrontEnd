import { createSelector, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Classroom, student } from '../../types/createFormsTypes';
import type { RootState } from '../store';

interface ClassRoomState {
  classRooms: Classroom[]; 
}

const initialState: ClassRoomState = {
  classRooms: [],
};

const selectClassRoomsState = (state: RootState) => state.classRooms.classRooms;

export const selectAvailableClasses= createSelector(
  [selectClassRoomsState],
  (classRooms) => {
    return classRooms.filter(c => c.seatsLeft > 0);
  }
);

const classRoomSlice = createSlice({
  name: 'classRooms',
  initialState,
  reducers: {
    setClassRooms: (state, action: PayloadAction<Classroom[]>) => {
      state.classRooms = action.payload;
    },
    addClassRoom: (state, action: PayloadAction<Classroom>) => {
      state.classRooms.push(action.payload);
    },
    deleteClassRoom: (state, action: PayloadAction<string>) => {
      state.classRooms = state.classRooms.filter(c => c.id !== action.payload);
    },
    addStudentToClass: (state, action: PayloadAction<{ classId: string; student: student }>) => {
      const { classId, student } = action.payload;
      const classroom = state.classRooms.find(c => c.id === classId);
      
      if (classroom && classroom.seatsLeft > 0) {
        classroom.users.push(student);
        classroom.seatsLeft -= 1;   
      }
    },
    removeStudentFromClass: (state, action: PayloadAction<{ classId: string; studentId: string }>) => {
      const { classId, studentId } = action.payload;
      const classroom = state.classRooms.find(c => c.id === classId);

      if (classroom && classroom.users) {
        classroom.users = classroom.users.filter(s => s.id !== studentId);
        classroom.seatsLeft += 1;
      }
    }
  },
});

export const { setClassRooms, addClassRoom, deleteClassRoom, addStudentToClass, removeStudentFromClass } = classRoomSlice.actions;

export default classRoomSlice.reducer;