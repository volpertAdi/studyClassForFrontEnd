import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllClassrooms } from '../../Api/classroom.api';
import { setClassRooms } from '../../Store/Slices/ClassroomSlice';
import { useNotification } from '../../context/NotificationContext';
import { getAllStudents } from '../../Api/user.api';
import { setStudents } from '../../Store/Slices/StudentsSlice';

const DataLoader = ({ children }: { children: React.ReactNode }) => {
    const dispatch = useDispatch();
    const { showModal } = useNotification();

    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await getAllClassrooms();
                const sortedData = [...data].sort((prev, curr) => prev.id.localeCompare(curr.id));
                dispatch(setClassRooms(sortedData));
            } catch {
                showModal('שגיאה', 'לא ניתן לטעון את הכיתות', 'error');
            }

            try {
                const data = await getAllStudents();
                const sortedData = [...data].sort((prev, curr) => prev.id.localeCompare(curr.id));
                dispatch(setStudents(sortedData));
            } catch {
                showModal('שגיאה', 'לא ניתן לטעון נתונים', 'error');
            }
        };
        loadData();
    }, []);

    return <>{children}</>;
};

export default DataLoader;