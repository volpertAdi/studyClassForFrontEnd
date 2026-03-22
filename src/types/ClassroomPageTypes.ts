import type { Classroom, student } from "./createFormsTypes";

export interface ClassCardProps {
  classroom: Classroom;
  onDelete: (classroom: Classroom) => void;
  onOpenList: (classroom: Classroom) => void;
}

export interface StudentsModalProps {
  students: student[];
  onRemove: (studentId: string) => void;
}