import { configureStore } from '@reduxjs/toolkit';
import classRoomReducer from './Slices/ClassroomSlice';
import studentReducer from './Slices/StudentsSlice';

export const store = configureStore({
  reducer: {
    classRooms: classRoomReducer,
    students: studentReducer, 
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;