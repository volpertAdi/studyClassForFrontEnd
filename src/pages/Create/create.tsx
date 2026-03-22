import * as S from './createStyles';
import GenericForm from '../../components/createForms/Form';

//types
import type { Classroom, student } from '../../types/createFormsTypes';
//consts
import { STUDENT_FIELDS, CLASS_FIELDS, emptyStudent, emptyClass } from '../../consts/createFormConsts';
//api
import { createUser } from '../../Api/user.api';
import { createClassroom } from '../../Api/classroom.api';
//context
import { useNotification } from '../../context/NotificationContext';
//store
import { useDispatch } from 'react-redux';
import { addStudent } from '../../Store/Slices/StudentsSlice';
import { addClassRoom } from '../../Store/Slices/ClassroomSlice';

const CreatePage = () => {
  const { showModal } = useNotification();
  const dispatch = useDispatch();

  const handleStudentSave = async (data: student) => {
    try {
      await createUser(data);
      showModal('Success!', `The student ${data.firstName} was added.`, 'success');
      dispatch(addStudent(data));
    } catch (error: any) {
      const errorMsg = error.response?.data?.message || 'Something went wrong';
      const formattedError = Array.isArray(errorMsg) ? errorMsg.join('\n• ') : errorMsg;
      
      showModal('Error Saving Student', formattedError, 'error');
    }
  };

  const handleClassSave = async (data: Classroom) => {
    try {
      await createClassroom(data);
      showModal('Created!', `Classroom ${data.name} is ready.`, 'success');
      dispatch(addClassRoom(data));
    } catch (error: any) {
      const errorMsg = error.response?.data?.message || 'Server error';
      const formattedError = Array.isArray(errorMsg) ? errorMsg.join('\n• ') : errorMsg;
      
      showModal('Error Creating Classroom', formattedError, 'error');
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

