export interface student {
    id: string,
    firstName: string,
    lastName: string,
    age: number,
    profession: string
    classroomId: string | null
}

export interface Classroom {
  id: string;
  name: string;
  seatsLeft: number;
  maxSeats: number; 
}

export interface FormFieldConfig<T> {
  name: keyof T;
  label: string;
  type?: string;
  required?: boolean;
}

export interface GenericFormProps<T> {
  initialValues: T;              
  fields: FormFieldConfig<T>[];  
  title: string;                 
  onSave: (data: T) => void;     
}

export interface ClassSelectProps {
  classes: Classroom[];
  onSelect: (classId: string) => void;
}