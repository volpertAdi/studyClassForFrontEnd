import * as S from './createStyles';
import GenericForm from '../../components/createForms/Form';

//types
import type { Classroom, student } from '../../types/createFormsTypes';
//consts
import { STUDENT_FIELDS, CLASS_FIELDS, emptyStudent, emptyClass } from '../../consts/createFormConsts';
//api
import { createUser } from '../../Api/user.api';
import { createClassroom } from '../../Api/classroom.api';

const CreatePage = () => {
  const handleStudentSave = async (data: student) => {
    try {
      const payload: student = {
        ...data,
        age: Number(data.age)
      };

      console.log('Sending user data...', payload);
      const result = await createUser(payload);
      alert('Student added successfully!');
      console.log('NestJS Response:', result);
    } catch (error) {
      alert('Failed to add student');
    }
  };

  const handleClassSave = async (data: Classroom) => {
    try {
      const payload: Classroom = {
        ...data,
        maxSeats: Number(data.maxSeats)
      };
      payload.seatsLeft = payload.maxSeats;

      console.log('Sending Classroom data...', payload);
      const result = await createClassroom(payload);
      alert('Classroom created successfully!');
      console.log('NestJS Response:', result);
    } catch (error) {
      alert('Failed to create classroom');
    }
  };

  return (
    <S.PageContainer>
      <GenericForm<student>
          title="Add Student"
          initialValues={emptyStudent}
          fields={STUDENT_FIELDS}
          onSave={handleStudentSave}
      />

      <GenericForm<Classroom>
          title="Create Classroom"
          initialValues={emptyClass}
          fields={CLASS_FIELDS}
          onSave={handleClassSave}
      />
    </S.PageContainer>
  );
};

export default CreatePage;


