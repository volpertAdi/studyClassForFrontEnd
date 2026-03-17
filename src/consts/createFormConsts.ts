import type { Classroom, FormFieldConfig, student } from "../types/createFormsTypes";

export const STUDENT_FIELDS: FormFieldConfig<student>[] = 
[
  { name: 'id',         label: 'ID',         required: true },
  { name: 'firstName',  label: 'First Name', required: true },
  { name: 'lastName',   label: 'Last Name',  required: true },
  { name: 'age',        label: 'Age',        required: true, type: 'number' },
  { name: 'profession', label: 'Profession', required: true,},
];

export const CLASS_FIELDS: FormFieldConfig<Classroom>[] = [
  { 
    name: 'id', 
    label: 'Class ID', 
    required: true 
  },
  { 
    name: 'name', 
    label: 'Class Name', 
    required: true 
  },
  { 
    name: 'maxSeats', 
    label: 'Maximum Seats', 
    type: 'number',
    required: true 
  }
];

export const emptyStudent: student = {
  id: '',
  firstName: '',
  lastName: '',
  age: 0,
  profession: '',
  classroomId: null
};

export const emptyClass: Classroom = {
  id: '',
  name: '',
  seatsLeft: 0,
  maxSeats: 0,
  users: []
};

export const SAVE_TEXT = 'שמור'  