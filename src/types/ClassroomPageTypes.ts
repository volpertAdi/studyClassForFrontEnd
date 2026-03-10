import type { Classroom, student } from "./createFormsTypes";

export interface ClassCardProps {
  classroom: Classroom;
  onDelete: (id: string) => void;
  onOpenList: (classroom: Classroom) => void;
}

export interface StudentsModalProps {
  students: student[];
  onRemove: (studentId: string) => void;
}